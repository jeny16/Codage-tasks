import React from 'react'

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h4 className="text-xl font-semibold mb-2">{todo.title}</h4>
      <p className="text-gray-700 mb-4">{todo.desc}</p>
      <button
        className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded hover:bg-red-600 transition duration-300"
        onClick={() => { onDelete(todo) }}
      >
        Delete
      </button>
    </div>
  )
}
