import React from 'react'

export default function Text(props) {
  return (
    <div className={`text text-${props.color} border`}>
        {props.children}
    </div>
  )
}
