import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        content: ""
    }

    handleChange = (e) =>{
        this.setState ({
            content: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.addTodo(this.state)

        this.setState({
            content: ""
        })
        
    }


    render(){  
        return (
            <div>
                <form className="form-group mt-5" onSubmit={this.handleSubmit}>
                    <label>Add new todo:</label>
                    <input 
                        className="form-control" 
                        type="text" 
                        onChange={this.handleChange}
                        value={this.state.content}
                    />
                </form>
            </div>
        )
    }
}

export default AddTodo;