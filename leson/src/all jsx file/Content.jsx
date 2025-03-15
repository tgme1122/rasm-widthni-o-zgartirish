import "./style.css"
import Header from "./Header"
import React from 'react'
import Meassage from "./Meassage"

export default function Content() {
  return (
    <div className="content">
        <Header/>
        <hr className="hr"/>
        <Meassage/>
    </div>
  )
}
