import React from "react";
import styles from "./Abbout.module.css"

interface AbboutProps {
    text: string
}

const Abbout = (props:AbboutProps) => {
    return(
    <article className={styles.abbout}>
        <p>{props.text}</p>
        <p>Colors where inspired by <a href="https://www.klmhealthservices.com/styleguide/kleurenpalet/"> <img className={styles.klm} src="/KLM_logo.png" alt="" /> </a></p>
        <p>This portfolio can be found in github as well.</p>
        <a href="https://github.com/Brdekrom/wf-portfolio-app"><img src="/github-mark.png" alt="Github Link" /></a>
        
        
    </article>
    )
}

export default Abbout