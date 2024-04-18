import "./style.css";
import React from 'react';

const TechnologiesCard = ({text, icon}) => {
  return (
    <div className='Container'>
      <div dangerouslySetInnerHTML={{ __html: icon }} />
      {text && <div>{text}</div>}
    </div>
  )
}

export default TechnologiesCard;
