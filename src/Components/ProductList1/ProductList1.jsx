import React from 'react';

function ProductList1({ data }) {
    return (
        <div>
            {data?.map((item1) => (
                <div key={item1.id}>
                    <h3>{item1.strMeal}</h3> 
                    <img src={item1.strMealThumb} alt={item1.strMeal} />
                </div>
            ))}
        </div>
    );
}

export default ProductList1;
