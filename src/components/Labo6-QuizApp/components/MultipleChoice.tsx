import { useState } from "react";
import { QuizQuestion} from "../../../types";
interface MultipleChoiceProps {
    question: QuizQuestion;
    setUserAnswer: (answer: string) => void
}

const sortAnswers = (correctAnswer: string, wrongAnswers: string[]) => {
    let allAnswers = [correctAnswer, ...wrongAnswers];
    allAnswers.sort(() => Math.random() -0.5);
    return allAnswers;
}

const MultipleChoice = ({question, setUserAnswer} : MultipleChoiceProps) => {
    const[allAnswers, setAllAnswers] = useState(sortAnswers(question.correct_answer, question.incorrect_answers));

    // let allQuestions = [...question.incorrect_answers, question.correct_answer];
    // allQuestions.sort((a,b) => Math.random() -0.5);
    
    return (
        <div>
           <select onChange={(event) => setUserAnswer(event.target.value)}>
            <option value= "" > Select an answer </option>
            {allAnswers.map((answer, index) => {
                return <option key ={index} value={answer}>{answer}</option>
            })}
           </select>
        </div>
    );
}

export default MultipleChoice