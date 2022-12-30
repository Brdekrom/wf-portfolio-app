import { QuizQuestion } from "./types"

interface TrueFalseQuestionProps {
    question: QuizQuestion
    setUserAnswer: (answer: string) => void
}

const TrueFalseQuestion  = ({question, setUserAnswer}: TrueFalseQuestionProps) => {
    return ( 
        <div>
            <input type="radio" name={question.question} onChange={(event) => setUserAnswer("true") } /> true
            <input type="radio" name={question.question} onChange={(event) => setUserAnswer("false") }/> false
        </div>

    )
}

export default TrueFalseQuestion 