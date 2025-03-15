import "./style.css"

import React from 'react'

export default function Users(props) {
  return (
    <div>
        <h3 className="form-control">{props.name}</h3>  
    </div>
  )
}
