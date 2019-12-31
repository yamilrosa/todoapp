import React, { Component } from 'react'
import Todos from './Todos';



class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'buy some milk'},
      { id: 2, content: 'play mario kart'}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter( todo => {
      return todo.id !== id
    })

    this.setState({
      todos: todos
    })

    
  }

  
  render() {
    return (
      <div className="container">
        <h1 className="text-center text-primary mt-5 mb-3">Todo's</h1> 
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    )
  }
}

export default App;
