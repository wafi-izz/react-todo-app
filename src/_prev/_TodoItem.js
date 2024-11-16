import React from "react";
import ReactDOM from 'react-dom';

export default class TodoItem extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         completed: props.completed
    //     };
        
    // }
    render() {
        let {title, description, completed} = this.props;
        let descriptionText = (!description) ? "a default text" : description;
        let completedText = (completed) ? "completed" : "not completed";
        let completedClass = (completed) ? "success" : "danger";
        let buttonClass = `btn btn-${completedClass}`;

        console.log(title + " render");

        return ( 
            <div className="todo-item p-3 mb-5 d-flex justify-content-between rounded">
                <div>
                    <h5>{title}</h5>
                    <p>{descriptionText}</p>
                </div>
                <button 
                    className={buttonClass}
                    onClick={() => this.props.onToggleCompleted()}
                >{completedText}</button>
            </div>
        );
    }
}