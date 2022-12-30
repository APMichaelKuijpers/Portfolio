import React, {useEffect, useState} from 'react';
import { QuizQuestion, QuizResponse} from "../../types";
import Question from "./components/Question"
import LoadingIndicator from "./components/LoadingIndicator"
import styles from "./QuizApp.module.css";

const QuizApp = () => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [loading, setLoading] = useState(false);
  const loadQuestions = async() => {
    setLoading(true);
    let response = await fetch ("https://opentdb.com/api.php?amount=10");
    let questionResponse: QuizResponse = await response.json();
    setQuestions([...questions, ...questionResponse.results]);
    setLoading(false);
  }

  useEffect(() => {
    loadQuestions();
  },[]);

  const setUserAnswer = (answer: string, index: number) =>{
    setQuestions(questions.map((question, i) => (index === i) ? {...question, user_answer: answer} : question));  
  }

  return(
    <div>
      {loading && <LoadingIndicator/>}
      {questions.map((question, index) => {
        return <Question question={question} setUserAnswer={(answer) => setUserAnswer(answer, index)}/>
      })}
      <button onClick={loadQuestions}>Load More</button>
    </div>

  )
}


const App = () => {
  return (
    <div className={styles.App}>
      <QuizApp/>
    </div>
  );
}




export default App;


//npm start