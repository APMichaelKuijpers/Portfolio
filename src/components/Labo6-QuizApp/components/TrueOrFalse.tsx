import { QuizQuestion} from "../../../types";

interface TrueOrFalseProps {
    question: QuizQuestion;
    setUserAnswer: (answer: string) => void
}

const TrueOrFalse = ({question, setUserAnswer} : TrueOrFalseProps) => {
    return (
        <div>
            <input type = "radio" name={question.question} onChange={(event) => setUserAnswer("True")}/> True
            <input type = "radio" name={question.question} onChange={(event) => setUserAnswer("False")}/> False
        </div>
    );
}

export default TrueOrFalse