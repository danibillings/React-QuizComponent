import React, { Component } from 'react'

class QuizQuestionButton extends Component {
    render() {
        return <li>
            <button onClick={this.handleClick.bind(this)}>{this.props.button_text}</button>
        </li>;
    }

    //passes click event to QuizQuestion with button_text prop
    handleClick() {
        this.props.clickHandler(this.props.button_text);
    }
}

export default QuizQuestionButton;