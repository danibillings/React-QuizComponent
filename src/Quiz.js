import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion'
import QuizEnd from './QuizEnd'

// this variable now holds JSON quiz data
let quizData = require('./quiz_data.json');

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {quiz_position: 1};
    }

    render() {
        const isQuizEnd = (this.state.quiz_position - 1) === quizData.quiz_questions.length;

        if (isQuizEnd) {
            return <div>
                <QuizEnd />
            </div>;
        }
        else {
            return <div>
                <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} showNextQuestionHandler={this.showNextQuestion.bind(this)} />
            </div>;
        }
    }

    // receives event from QuizQuestion and updates component state accordingly
    showNextQuestion() {
        this.setState({
            quiz_position: this.state.quiz_position + 1
        });
    }
}

export default Quiz;