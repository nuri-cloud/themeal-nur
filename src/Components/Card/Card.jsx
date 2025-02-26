import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'


function Card({ cart }) {
    return (
        <div>
            <div className='block3'>
                <div className='card'>
                    <Link to={`/meal/${cart.idMeal}`}>
                        <img src={cart.strMealThumb} alt="" />
                        <p>{cart.strMeal}</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card
