import Timer from "./Timer"
import styles from "./Interval.module.css"
import CurrentTime from "./CurrentTime"
import RandomValue from "./RandomValue"
import Abbout from "../../Abbout/Abbout"


const Interval = () => {

    return (
        <>
        <div className={styles.intervalContainer}>
        <Timer/>
        <br />
        <CurrentTime/>
        <br />
        <RandomValue min={1} max={100}/>
        <br />
        <RandomValue min={100} max={200}/>
        </div>
        <Abbout text=""></Abbout>
        </>
    )
}

export default Interval