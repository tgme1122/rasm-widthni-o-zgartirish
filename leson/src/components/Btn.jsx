import React from "react"

const Btn = (props) => {
    return <div>
        <button className={`btn btn-${props.color}`}>
            click me
        </button>
    </div>
}

export default Btn