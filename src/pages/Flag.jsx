import React, { useState, useEffect } from 'react'
import ProductList from '../Components/ProductList/ProductList'
import apiClient from '../Axios/apiClient'
import { useParams } from 'react-router-dom'
import Country from '../Components/Country/Country'
import Alfa from '../Components/Alfa/Alfa'

function Flag() {
    const { value } = useParams()
    const [product, setProduct] = useState([])

    async function getFlag() {
        try {
            const res = await apiClient.get(`/filter.php?a=${value}`)

            console.log(res);
            setProduct(res.data.meals)

        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        getFlag()
    }, [value])





    return (
        <div>
            {value}
            <ProductList data={product} />
            <Country />
            <Alfa />
        </div>
    )
}

export default Flag
