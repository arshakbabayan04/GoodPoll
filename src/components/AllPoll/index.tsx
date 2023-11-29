import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { changePollActive, getPoll } from "../AddPoll/pollApi";
import { Poll } from "../../types";
import Swal from "sweetalert2";

const AllPoll = () => {
    const [btnActive, setBtnActive] = useState<number[]>([]);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getPoll());
    }, []);

    const { poll } = useAppSelector((state) => state.poll);

    return (
        <>
            <div className="all_poll pt-32">
                <div className="container mx-auto">
                    {poll.map((el: Poll) => (
                        <div
                            key={el.id}
                            className="wrapper flex gap-5 items-center mx-auto w-1/3 mb-5"
                        >
                            <div className="w-full bg-slate-200 min-h-16 p-5 rounded-lg">
                                <p>{el.question}</p>
                            </div>
                            <button
                                onClick={() => {
                                    setBtnActive([...btnActive, +el.id]);
                                    dispatch(changePollActive(el.id))
                                        .unwrap()
                                        .then(() =>
                                            Swal.fire({
                                                position: "center",
                                                icon: "success",
                                                title: "Your poll has been activated",
                                                showConfirmButton: false,
                                                timer: 1500,
                                            })
                                        )
                                }
                                }
                                type="button"
                                className="h-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                {btnActive.includes(+el.id) ? 'Deactive' : 'Active'}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AllPoll;
