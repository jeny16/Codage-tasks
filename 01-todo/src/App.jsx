import { useState } from "react";
import AddTodo from "./components/addTodo";
import Todos from "./components/todos";
import SearchTodo from "./components/searchTodo";

function App() {
    let initTodo;
    const [searchTerm, setSearchTerm] = useState("");
    const [status, setStatus] = useState(false);

    if (localStorage.getItem("todos") === null) {
        initTodo = [];
    } else {
        initTodo = JSON.parse(localStorage.getItem("todos"));
    }

    const [todos, setTodos] = useState(initTodo);

    const onDelete = (todo) => {
        // console.log("I am on delete of todo", todo);
        setTodos((prevTodos) => {
            const updatedTodos = prevTodos.filter((e) => e !== todo);
            localStorage.setItem("todos", JSON.stringify(updatedTodos));
            return updatedTodos;
        });
    };

    const addTodo = (title, desc) => {
        // console.log("I am adding this todo", title, desc);
        let sno = todos.length === 0 ? 0 : todos[todos.length - 1].sno + 1;

        const myTodo = {
            sno: sno,
            title: title,
            desc: desc,
        };
        setTodos([...todos, myTodo]);
        localStorage.setItem("todos", JSON.stringify([...todos, myTodo]));
        console.log(myTodo);
    };

    const filteredTodos = todos.filter((todo) =>
        todo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container">
            <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
                <h1 className="text-2xl font-bold">Todo App</h1>
                <div className="flex items-center space-x-2">
    <div className="relative w-full">
        <input
            type="text"
            placeholder="Search Todos by Title..."
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            className="w-full p-3 pl-10 rounded-l-md border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
    </div>
    <button
        onClick={() => setStatus(!status)}
        className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-r-md px-4 py-2"
    >
        SEARCH
    </button>
</div>

            </div>
            {status && filteredTodos.length > 0 && (
                <SearchTodo todos={filteredTodos} onDelete={onDelete}/>
            )}
            <AddTodo addTodo={addTodo} />
            
            <Todos todos={todos} onDelete={onDelete} /> 
        </div>
    );
}

export default App;
