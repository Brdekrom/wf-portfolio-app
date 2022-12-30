import { useEffect, useState } from "react"
import { QuizQuestion, QuizResponse } from "./types"
import LoadingIndicator from "../../LoadingIndicator/LoadingIndicator"
import Question from "./Question"


const QuizApp = () => {
    const [questions, setQuestions] = useState<QuizQuestion[]>([])
    const [loading, setLoading] = useState(false)

    const loadQuestions = async () => {

        setLoading(true)
        let response = await fetch("https://opentdb.com/api.php?amount=10")

        let questionResponse: QuizResponse = await response.json()

        setQuestions(questionResponse.results)
        setLoading(false)
    }

    useEffect(() => {
        loadQuestions();
    },[])

    const setUserAnswer = (answer:string, index: number) => {
        let newQuestions = [...questions]
        newQuestions[index].user_answer = answer
        setQuestions(newQuestions)
    }

    const sortAnswers = (correctAnswer: string, wrongAnswers: string[]) => {
        let allAnswers = [correctAnswer, ...wrongAnswers]
        allAnswers.sort((a,b) => Math.random() - 0.5)
        return allAnswers
    }

    return (
    <div>
        {loading && <LoadingIndicator/>}
        {questions.map((question, index) => {
            return <Question 
                question={question}
                setUserAnswer={(answer) => setUserAnswer(answer, index)} 
                allAnswers={[]} 
                setAllAswers={function (answers: string[]) {
                    throw new Error("Function not implemented.")
                } }              />
        }) }
    </div>
    )
}

export default QuizApp