import { useState } from "react";
import AddTodo from "./components/addTodo";
import Todos from "./components/todos";

function App() {
    let initTodo;
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

    return (
        <div className="container">
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
        </div>
    );
}

export default App;
