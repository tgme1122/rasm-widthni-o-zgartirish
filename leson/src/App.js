import {useState} from "react";
import rasm from "./Screenshot 2025-01-15 072647.png"
import style from "./style.css"
import "bootstrap/dist/css/bootstrap.css"

const App = () => {
    const [size , setSize] = useState(400)
    const [deg , setDegre] = useState(0)

    return <div className="container">
        <img style={
            {width:`${size}px`, height:`${size}px`,
            transform: `rotate(${deg}deg)`
            }} className="image" src={rasm} alt="#"/>
        <div className="d-flex gap-2">
            <button onClick={() => setSize(size + 10)} className="btn btn-success">increment width</button>
            <button onClick={() => setSize(size - 10)} className="btn btn-danger">decrement width</button>
            <button onClick={() => setDegre(deg + 30)} className="btn btn-primary">rotate y</button>
            <button onClick={() => setDegre(deg - 30)} className="btn btn-success">rotate x</button>
        </div>
    </div>
}

export default App