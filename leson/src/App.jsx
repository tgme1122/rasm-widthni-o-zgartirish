import {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css"

const App = () => {
    const[person , setPerson] = useState(
        {
            name : "Anna" , 
            lastName: "Adolf",
            age : 78
        }
    )

    const changePerson = () => {
        {
            setPerson(
                {
                    ...person,
                    name : "Anchelotti",
                    lastName : "Xosep"
                }
            )
        }
    }

    return <>
    <button onClick={changePerson} className="btn btn-dark" >change</button>
        <h3>${person.name}</h3>
        <h3>${person.lastName}</h3>
        <h3>${person.age}</h3>
    </>
}

export default App