import React from 'react'
import { useState } from 'react';

function AddTodo({ addTodo }) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("title or description cannot be blank")
        }
        else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }

    return (
        <div className="container mx-auto my-8 p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-center text-2xl font-semibold mb-6">Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-lg font-medium mb-2">
                        Todo Title
                    </label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        id="title"
                        placeholder="Enter title"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="desc" className="block text-lg font-medium mb-2">
                        Todo Description
                    </label>
                    <input
                        type="text"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        id="desc"
                        placeholder="Enter description"
                    />
                </div>
                <button
                    type="submit"
                    className="px-6 py-2 bg-green-500 text-white text-sm font-semibold rounded-lg hover:bg-green-600 transition duration-300"
                >
                    Add Todo
                </button>
            </form>
        </div>

    )

}

export default AddTodo