import { useEffect, useState } from "react"
interface RandomValueProps {
    min:number,
    max:number
}

const RandomValue = ({min, max}:RandomValueProps) => {
    return(
        <p>
            Random value between {min} and {max}: 
        </p>
    )
}


export default RandomValue