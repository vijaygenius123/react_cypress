import React from 'react'

const TodoItem = ({id, title}) => {
    return (
        <div key={id}>
            {title}
        </div>
    )

}

export  default TodoItem;
