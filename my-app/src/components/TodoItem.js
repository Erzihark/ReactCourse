import React, {Component} from "react";

class TodoItem extends Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.checkHandler = this.checkHandler.bind(this)
    }

    checkHandler() {
        
    }

    render() {
        return(
        <div className="todo-item">
            <input type="checkbox" checked={this.props.status.checked} onChange={() => console.log("Changed")}/>
            <div>
            {this.props.content.text}
            </div>
        </div>
        )
    }
}

export default TodoItem;

