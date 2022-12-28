import { Fragment, useState,  } from "react"
import style from "./Contact.module.css"

const Contact = () => {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")

    const successMessage = () => {

        return (
            <Fragment>
                <p>Hi {name}, Your email was sent succesfully, We'll reach you out on your email: {email}</p>
                <p>Until then!</p>
            </Fragment>

        )
    }

    return (
        <form action="">
            lab
        </form>

)

}

export default Contact