import React from 'react'
import './List.css'
import Card from '../Card/Card'

function ProductList({data}) {
  return (
    <div>
      <h5>Latest Meals</h5>
      <div className='productlist'>
      {
        data?.map((item) => (
            <Card key={item.idMeal} cart={item}/>
        ))
      }
      </div>
    </div>
  )
}

export default ProductList
