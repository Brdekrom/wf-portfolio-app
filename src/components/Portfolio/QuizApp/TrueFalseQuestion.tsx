import { QuizQuestion } from "./types"


interface TrueFalseQuestionProps {
    question: QuizQuestion
    setUserAnswer: (answer:string) => void
}

const TrueFalseQuestion = ({question, setUserAnswer}:TrueFalseQuestionProps) => {

    return(
        <div>
            <input type="radio" name={question.question} onChange={(e) => setUserAnswer("true") } /> True
            <input type="radio" name={question.question} onChange={(e) => setUserAnswer("false") } /> False
        </div>
    )
}

export default TrueFalseQuestion