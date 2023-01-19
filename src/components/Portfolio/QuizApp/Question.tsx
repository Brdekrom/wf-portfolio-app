import MultipleChoiceQuestion from "./MultipleChoiceQuestion"
import TrueFalseQuestion from "./TrueFalseQuestion"
import { QuizQuestion } from "./types"

interface QuestionProps {
    question: QuizQuestion
    setUserAnswer: (answer: string) => void
    allAnswers: string[]
    setAllAnswers: (answers: string[]) => void
}



const Question = ({ question, setUserAnswer, allAnswers, setAllAnswers }: QuestionProps) => {
    let color = "white"
    let answerMessage = ""
    if (question.user_answer !== undefined) {
        if (question.user_answer === question.correct_answer) {
            color = "green"
            answerMessage = "Wel done! you got the correct answer"
        }
        else {
            color = "red"
            answerMessage = "Oh no, you got it wrong, better luck next time!"
        }
    }

    return (
        <div style={{ backgroundColor: color }}>
            <p>{answerMessage}</p>
            <h3>{question.question}</h3>

            {question.user_answer === undefined &&
                <div>{question.type === "boolean" &&
                    <TrueFalseQuestion
                        question={question}
                        setUserAnswer={setUserAnswer}
                    />}

                    {question.type === "multiple" &&
                        <MultipleChoiceQuestion
                            question={question}
                            setUserAnswer={setUserAnswer}
                        />}

                    { question.user_answer &&
                    <div>
                        {(question.user_answer !== question.correct_answer) &&
                        (<p>You answered {question.user_answer}, but correct answer was {question.correct_answer} </p>)
                        }
                       
                       </div>
                       }

                </div>}

        </div>

    )
}

export default Question