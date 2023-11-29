import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getActivePoll, quotePoll } from "../AddPoll/pollApi";
import { Option } from "../../types";

const ActivePoll = React.memo(() => {
    const dispatch = useAppDispatch();
    const [activeClass, setActiveClass] = useState<number[]>([]);

    useEffect(() => {
        dispatch(getActivePoll());
    }, []);

    const { poll } = useAppSelector((state) => state.poll);

    return (
        <>
            <div className="active_poll p-32">
                <div className="container mx-auto">
                    {poll.map((el, index) => (
                        <div key={index} className="poll_wrapper mb-5 mx-auto ">
                            <p className="text-center font-bold text-2xl">
                                Poll #{index + 1}
                            </p>
                            <p className="text-center mt-3 text-xl">
                                {el.question}
                            </p>
                            <ul className="w-1/2 mx-auto mt-10">
                                {el.options ? (
                                    el.options.map((el1: Option) => {
                                        return <li
                                            className="bg-slate-200 p-2 rounded-xl mb-2 hover:bg-gray-500 hover:text-white"
                                            key={el1.id}
                                            onClick={() => {
                                                setActiveClass([...activeClass, +el.id]);
                                                dispatch(quotePoll(el1.id))
                                                    .unwrap()
                                                    .then(() =>
                                                        dispatch(
                                                            getActivePoll()
                                                        )
                                                    );
                                            }}
                                        >
                                            <p className="mb-3">{el1.text}</p>
                                            <div className={`${activeClass.includes(+el.id) ? 'block' : 'hidden'} w-full mb-3 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700`}>
                                                <div
                                                    className="bg-blue-600 h-2.5 rounded-full"
                                                    style={{
                                                        width:
                                                            el1.quoteCount !== 0
                                                                ? el1.quoteCount +
                                                                "0" +
                                                                "%"
                                                                : "0%",
                                                        transition: "0.5s",
                                                    }}
                                                ></div>
                                            </div>
                                        </li>
                                    })
                                ) : (
                                    <p>There is no options</p>
                                )}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
});

export default ActivePoll;
