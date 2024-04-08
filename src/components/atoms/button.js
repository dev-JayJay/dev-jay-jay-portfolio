import "./style.css"
import React from 'react'

const Button = ({text}) => {
  return (
    <div className="ButtonContainer">
      <p>{text}</p>
    </div>
  )
}

export default Button;
