import React, {Component} from 'react';
import TodoItem from "./TodoItem";

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            todo: ''
        }
    }

    handleInputChange = (e) => {
        this.setState({todo: e.target.value})
    }

    handleAddTodo = () => {
        const {todo, todos} = this.state;
        if (todo) {
            this.setState({
                todo: '',
                todos: [...todos, {title: todo, id: todos.length + 1}]
            })
        }
    }

    handleDelete = (id) => {
        const {todos} = this.state;
        this.setState({
            todos: todos.filter(todo => todo.id !== id)
        })

    }

    render() {
        const {todos, todo} = this.state;
        return (
            <div data-test-id="todo-list">
                <h1 data-test-id="todo-heading">Todo List</h1>
                <input type="text" value={todo} onChange={this.handleInputChange} data-test-id="todo-input"/>
                <button data-test-id="todo-add" onClick={this.handleAddTodo}>Add</button>
                {todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} handleDelete={this.handleDelete}/>
                ))}
            </div>
        );
    }
}

TodoList.propTypes = {
    todos: Object,
};

export default TodoList;
