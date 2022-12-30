import MultipleChoiceQuestion from "./MultipleChoiceQuestion"
import TrueFalseQuestion from "./TrueFalseQuestion"
import { QuizQuestion } from "./types"

interface QuestionProps {
    question: QuizQuestion
    setUserAnswer: (answer: string) => void
    allAnswers: string[]
    setAllAswers: (answers: string[]) => void

}

const Question = ({question, setUserAnswer, allAnswers, setAllAswers}: QuestionProps) => {
    let color = "white"
    if (question.user_answer !== undefined) {
        if (question.user_answer === question.correct_answer) {
            color = "white"
        }else {
            color = "red"
        }
        
    }

    return ( 
        <div>
        <div>{question.question}</div>

        <div>
        {question.type ==="boolean" && <TrueFalseQuestion 
        question={question}
        setUserAnswer={setUserAnswer}
        />}

        {question.type ==="multiple" && <MultipleChoiceQuestion 
        question={question}
        setUserAnswer={setUserAnswer}
        />}
        </div>
        </div>
        )
}

export default Question