import React from 'react'

const TechnologiesCard = ({text, icon}) => {
  return (
    <div className='Container'>
      {icon && <div>{icon}</div>}
      {text && <div>{text}</div>}
    </div>
  )
}

export default TechnologiesCard;
