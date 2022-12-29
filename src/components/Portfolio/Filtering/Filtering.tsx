import { Fragment, useState } from "react"
import styles from "./Filtering.module.css"
import Abbout from "../../Abbout/Abbout"

const Filtering = () => {
    const [searchItem, setSearchItem] = useState<string>("")
    const [sort, setSort] = useState<string>("name")

    interface students {
        name: string,
        age: number,
        year: number
    }

    const students: students[] = [
        { name: "Mathias", age: 23, year: 4 },
        { name: "Jan", age: 20, year: 1 },
        { name: "Perneel", age: 22, year: 2 },
        { name: "Korneel", age: 22, year: 4 },
        { name: "Jacob", age: 21, year: 2 },
        { name: "Muhammad", age: 20, year: 1 },
        { name: "Piet", age: 21, year: 3 },
        { name: "André", age: 19, year: 1 },
        { name: "Joris", age: 22, year: 3 },
    ]

    students.sort((a,b) => {
        if (sort === "name") {
            return a.name.localeCompare(b.name)}
        else if (sort === "age") {
            return a.age - b.age}
        else if (sort === "year"){
            return a.year - b.year
        }
        return 0
    })

    return (
        <>
            <main className={styles.filterMain}>
                <label>
                    Search: <input type="text" onChange={event => setSearchItem(event.target.value)} value={searchItem} />
                </label>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th onClick={() => setSort("name")} >Name</th>
                            <th onClick={() => setSort("age")}>Age</th>
                            <th onClick={() => setSort("year")}>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.filter((student) => student.name.startsWith(searchItem))
                            .map((student) =>
                            (
                                <tr>
                                    <td>{student.name}</td>
                                    <td>{student.age}</td>
                                    <td>{student.year}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </main>
            <Abbout text="Small filter and sort demonstration. Warning: Caps sensitive."></Abbout>
        </>
    )
}

export default Filtering