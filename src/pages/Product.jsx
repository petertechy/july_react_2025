import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const Product = () => {
  return (
    <div>
        <Link to="fish">Fish</Link> || <Link to="meat">Meat</Link>

        <Outlet/>
    </div>
  )
}

export default Product