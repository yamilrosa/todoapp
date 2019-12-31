import React from 'react';

const Todos = (props) => {


    const todoList = props.todos.length ? (
        props.todos.map(todo => {
            return (
                <li onClick={() => {props.deleteTodo(todo.id)}} className="list-group-item" key={todo.id}>{todo.content}</li>
            )
        })
    ) : (
        <p className="text-center">You have no todo's left, yay!</p>
    )
    

    return (
        <ul className="list-group">
            {todoList}
        </ul>
    )
}

export default Todos;