import Timer from "./Timer"
import styles from "./Interval.module.css"
import CurrentTime from "./CurrentTime"


const Interval = () => {

    return (
        <>
        <div className={styles.intervalContainer}>
        <Timer/>
        <br />
        <CurrentTime/>
        </div>
        
        </>
    )
}

export default Interval