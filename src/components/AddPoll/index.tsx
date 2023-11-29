import React, { FC } from "react";
import { Formik, FieldArray, Form } from "formik";
import { useAppDispatch } from "../../store/hooks";
import { addPoll } from "./pollApi";
import Swal from "sweetalert2";

const AddPoll: FC = React.memo(() => {
    const initialValues = {
        options: [
            {
                name: "",
            },
        ],
        question: "",
    };

    const dispatch = useAppDispatch();

    return (
        <>
            <div className="add_poll pt-20">
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values, { resetForm }) => {
                        const data: any = {
                            question: values.question,
                            options: [],
                        };

                        values.options.forEach((el) => {
                            data.options.push(el.name);
                        });

                        console.log("data", data);

                        dispatch(addPoll(data))
                            .unwrap()
                            .then(() =>
                                Swal.fire({
                                    position: "center",
                                    icon: "success",
                                    title: "Your poll has been saved",
                                    showConfirmButton: false,
                                    timer: 1500,
                                })
                            );

                        resetForm();
                    }}
                >
                    {({ handleSubmit, handleChange, values }) => (
                        <Form
                            onSubmit={handleSubmit}
                            className="w-full max-w-lg mx-auto mt-10"
                        >
                            <FieldArray name="options">
                                {({ push }) => (
                                    <div className="flex items-center flex-wrap -mx-3 mb-2">
                                        {values.options.map((item, i) => (
                                            <div
                                                key={i}
                                                className=" w-full md:w-1/2 px-3 mb-6 md:mb-0"
                                            >
                                                <label
                                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                    htmlFor="options"
                                                >
                                                    Option {i + 1}
                                                </label>
                                                <input
                                                    onChange={handleChange}
                                                    name={`options.${i}.name`}
                                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                    id="options"
                                                    type="text"
                                                    placeholder="1"
                                                />
                                            </div>
                                        ))}
                                        <button
                                            type="button"
                                            onClick={() => push({ name: "" })}
                                            className="h-1/2 ml-3 mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        >
                                            +
                                        </button>
                                    </div>
                                )}
                            </FieldArray>

                            <div className="flex flex-wrap -mx-3 mb-2">
                                <div className="w-full px-3">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="question"
                                    >
                                        Question
                                    </label>
                                    <textarea
                                        onChange={handleChange}
                                        name="question"
                                        value={values.question}
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="question"
                                        placeholder="question"
                                    />
                                </div>
                            </div>
                            <div className="btns_wrapper flex gap-5">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Add
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    );
});

export default AddPoll;
