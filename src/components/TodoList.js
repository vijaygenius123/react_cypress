import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
    }
    render() {
        const {todos} = this.state;
        return (
            <div data-test-id="todo-list">
                <h1 data-test-id="todo-heading">Todo List</h1>
                {todos.map(todo => (
                    <TodoItem todo={todo} />
                ))}
            </div>
        );
    }
}

TodoList.propTypes = {
    todos: Array,
};

export default TodoList;
