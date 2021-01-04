import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoList extends Component {
    render() {
        return (
            <div data-test-id="todo-list">
                <h1 data-test-id="todo-heading">Todo List</h1>
            </div>
        );
    }
}

TodoList.propTypes = {
    todos: Array,
};

export default TodoList;
