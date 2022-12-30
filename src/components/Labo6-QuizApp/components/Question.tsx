import { QuizQuestion} from "../../../types";
import TrueOrFalse from "./TrueOrFalse"
import MultipleChoice from "./MultipleChoice"

interface QuestionProps {
    question: QuizQuestion;
    setUserAnswer: (answer: string) => void
}

const Question = ({question, setUserAnswer} : QuestionProps) => {
    let color = "";
    if(question.user_answer !== undefined){
        if (question.user_answer === question.correct_answer) {
            color = "green";
        } else {
            color = "red";
        }
    }
    return (
        <div style={{backgroundColor: color, padding: 5}}>
           <div>{question.question}</div>
           {question.user_answer === undefined && <div>
            {question.type === "boolean" && <TrueOrFalse question={question} setUserAnswer={setUserAnswer}/>}
            {question.type === "multiple" && <MultipleChoice question={question} setUserAnswer={setUserAnswer}/>}
           </div>}
           {question.user_answer &&(
            <div>
                {(question.user_answer === question.correct_answer) && <p>{question.user_answer} is the right answer!</p>}
                {(question.user_answer !== question.correct_answer) &&  <p>You answered {question.user_answer} and the correct answer is {question.correct_answer}</p>}
               
           </div>)}
        </div>
    );
}

export default Question;