import React from 'react'

const TodoItem = ({todo: {id, title}}) => {
    return (
        <div key={id} data-test-class="todo-item" className="todo-item">
            {title}
        </div>
    )

}

export  default TodoItem;
