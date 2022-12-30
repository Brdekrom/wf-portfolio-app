import Question from "./Question"
import { QuizQuestion } from "./types"

interface MultipleChoiseQuestionProps {
    question: QuizQuestion
    setUserAnswer: (answer: string) => void
}

const sortAnswers = (correctAnswer: string, wrongAnswers: string[]) => {
    let allAnswers = [correctAnswer, ...wrongAnswers]
    allAnswers.sort((a,b) => Math.random() - 0.5)
    return allAnswers
}

const MultipleChoiceQuestion  = ({question, setUserAnswer}: MultipleChoiseQuestionProps) => {
    let allQuestions = [...question.incorrect_answers, question.correct_answer]
    allQuestions.sort((a,b) => Math.random() - 0.5)
    return ( 
        <div>
            <select onChange={event => setUserAnswer(event.target.value)} >
                <option value=""></option>
                {allQuestions.map((answer, index) => {
                    return <option key={index} value={answer}>{answer}</option>
                }) }
            </select>
        </div>

    )
}

export default MultipleChoiceQuestion 