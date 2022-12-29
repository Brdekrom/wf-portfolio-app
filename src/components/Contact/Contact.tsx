import { Fragment, useRef, useState, } from "react"
import styles from "./Contact.module.css"
import emailjs from 'emailjs-com'
import Abbout from "../Abbout/Abbout"

const Contact = () => {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [message, setMessage] = useState<string>("")

    const validator = (name: string, email: string, message: string): boolean => {
        if (name !== "" && email !== "" && message !== "") {
            return true
        } else {
            return false;
        }
    }

    const handleClick = () => {
        setName("")
        setEmail("")
        setMessage("")
    }


    const form = useRef();

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs.sendForm('default_service', 'default_template', e.target, 'OTP85_cjHYuhqr02-')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <main className={styles.main}>
            <form className={styles.formStyle} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="name" onChange={event => setName(event.target.value)} value={name} placeholder="John Doe" />
                <label>Email</label>
                <input type="email" name="email" onChange={event => setEmail(event.target.value)} value={email} placeholder="example@ap.be" />
                <label>Message</label>
                <textarea name="message" onChange={event => setMessage(event.target.value)} value={message} placeholder="Write here your message" />
                {validator(email, name, message) && <input className={styles.submitButton} onClick={() => setTimeout(handleClick, 500)} type="submit" value="Send" />}
            </form>
            <Abbout />
        </main>


    )

}

export default Contact