import { useContext } from "react";
import { toast } from "react-toastify";
import { todocontext } from "../Wrapper";

const Read = () => {
    const [todos, settodos] = useContext(todocontext);

    const DeleteHandler = (id) => {
        settodos(todos.filter((todo) => todo.id !== id));
        toast.error("Todo removed!");
    };

    return (
        <div className="w-full lg:w-[40%] bg-gray-900 text-white p-8 rounded-2xl shadow-xl border border-gray-800">
            <h2 className="text-3xl font-semibold mb-6">
                📋 <span className="text-pink-400">Pending</span> Todos
            </h2>
            <ul className="space-y-4">
                {todos.length === 0 ? (
                    <p className="text-gray-400 italic">No todos added yet.</p>
                ) : (
                    todos.map((todo) => (
                        <li
                            key={todo.id}
                            className="flex justify-between items-center bg-gray-800 px-4 py-3 rounded-lg shadow hover:bg-gray-700 transition-all"
                        >
                            <span className="text-lg font-medium">{todo.title}</span>
                            <button
                                onClick={() => DeleteHandler(todo.id)}
                                className="text-red-400 hover:text-red-600 transition"
                            >
                                ❌ Delete
                            </button>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default Read;
