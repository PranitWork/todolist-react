import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { todocontext } from "../Wrapper";

const Create = () => {
    const [todos, settodos] = useContext(todocontext);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const SubmitHandler = (data) => {
        data.id = nanoid();
        data.isCompleted = false;
        settodos([...todos, data]);
        toast.success("Todo added successfully!");
        reset();
    };

    return (
        <div className="w-full lg:w-[55%] bg-white p-8 rounded-2xl shadow-xl border">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                ✨ Plan Your <span className="text-red-500">Tasks</span>
            </h2>
            <form onSubmit={handleSubmit(SubmitHandler)}>
                <div className="mb-4">
                    <input
                        {...register("title", {
                            required: "Task title is required.",
                        })}
                        type="text"
                        placeholder="What needs to be done?"
                        className="w-full px-4 py-3 text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 shadow-sm transition"
                    />
                    {errors?.title && (
                        <p className="text-sm text-red-500 mt-1">{errors.title.message}</p>
                    )}
                </div>
                <button
                    type="submit"
                    className="mt-2 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300 shadow-md"
                >
                    ➕ Add Todo
                </button>
            </form>
        </div>
    );
};

export default Create;
