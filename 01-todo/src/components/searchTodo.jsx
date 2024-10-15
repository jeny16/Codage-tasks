import React from 'react';
import { TodoItem } from "./todoItem";

function SearchTodo(props) {
    return (
        <div className="container">
            <h3 className="text-center my-3">TODOS LIST</h3>
            {props.todos.length === 0
                ? "NO TODOS TO DISPLAY"
                : props.todos.map((todo) => {
                    return (
                        <React.Fragment key={todo.sno}> {/* Key on Fragment */}
                            <TodoItem todo={todo} onDelete={props.onDelete} />
                            <hr />
                        </React.Fragment>
                    );
                })}
        </div>
    );
}

export default SearchTodo;