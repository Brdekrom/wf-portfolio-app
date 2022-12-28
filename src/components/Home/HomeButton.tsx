import React from "react"
import styles from "./Home.module.css"
import { NavLink } from "react-router-dom"

interface HomeButtonsProps {
    linkTo:string
    text:string
}

const HomeButton  = (props:HomeButtonsProps) => {
    return(
        <NavLink to={props.linkTo}><button  className={styles.bouncy}>{props.text}</button></NavLink>
        )
    
}

export default HomeButton