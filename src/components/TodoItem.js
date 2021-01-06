import React from 'react'

const TodoItem = ({todo: {id, title}, handleDelete}) => {
    return (
        <div data-test-class="todo-item" className="todo-item">
            {title} <span onClick={() => handleDelete(id)}>X</span>
        </div>
    )

}

export  default TodoItem;
