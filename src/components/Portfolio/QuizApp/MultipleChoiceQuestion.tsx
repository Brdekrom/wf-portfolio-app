import { QuizQuestion } from "./types"

interface MultipleChoiceQuestionProps {
    question: QuizQuestion,
    setUserAnswer: (answer:string)=>void
}

interface sortAnswersProps {
    correctAnswer: string,
    wrongAnswers: string[]
}

const sortAnswers = (toSortAnswers: sortAnswersProps) => {
    const { correctAnswer, wrongAnswers } = toSortAnswers
    let sortedAnswers = [correctAnswer, ...wrongAnswers]
    sortedAnswers.sort((a, b) => Math.random() - 0.5)
    return sortedAnswers
}


const MultipleChoiceQuestion = ({question, setUserAnswer} : MultipleChoiceQuestionProps) => {
    let allQuestions = [...question.incorrect_answers, question.correct_answer]
    allQuestions.sort((a,b) => Math.random()-0.5)

    return (
        <div>
            <select onChange={e => setUserAnswer(e.target.value)}>
                <option>Select an Answer</option>
                {allQuestions.map((answer, index) => {
                    return <option key={index} value={answer}>{answer}</option> 
                }) }
            </select>
        </div>
    )
}

export default MultipleChoiceQuestion