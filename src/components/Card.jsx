import React from 'react'

const Card = ({title, color, onClick}) => {
  // console.log(props.color)
  return (
    <>
        <button onClick={onClick} className={color}>{title}</button>
    </>
  )
}

export default Card
