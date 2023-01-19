import { useEffect, useState } from "react"
import { QuizQuestion, QuizResponse } from "./types"
import MultipleChoiceQuestion from "./MultipleChoiceQuestion"
import Question from "./Question"
import LoadingIndicator from "../../LoadingIndicator/LoadingIndicator"
import {decode} from 'html-entities'

decode('&lt; &gt; &quot; &apos; &amp; &#169; &#8710;');


const QuizApp = () => {
    let [questions, setQuestions] = useState<QuizQuestion[]>([])
    let [loading, setLoading] = useState(false)

    const questionLoader = async () => {
        setLoading(true)
        let response = await fetch("https://opentdb.com/api.php?amount=10")
        let fetchedQuestions: QuizResponse = await response.json()
        let questionsArray = [...questions,...fetchedQuestions.results]
        setQuestions(questionsArray)
        setLoading(false)
    }

    useEffect(() => {
        questionLoader()
    }, [])

    const setUserAnswer = (answer: string, index: number) => {
        let newQuestions = [...questions]
        newQuestions[index].user_answer = answer
        setQuestions(newQuestions)
    }

    return (
        <div>
            {loading && <LoadingIndicator />}
            {questions.map((question, index) => {
                return <Question
                    question={question}
                    setUserAnswer={(answer) => setUserAnswer(answer, index)}
                    allAnswers={[]}
                    setAllAnswers={function (answers: string[]) {
                        throw new Error("Function not implemented.")
                    }} />
            })}
            <button onClick={questionLoader}>Load More</button>
        </div>
    )
}

export default QuizApp