
import React, { useState, useEffect } from 'react';
import ProductList from '../Components/ProductList/ProductList';
import apiClient from '../Axios/apiClient';
import { useParams } from 'react-router-dom';
import Alfa from '../Components/Alfa/Alfa';

function Alfa1() {
    const { value } = useParams(); 
    const [product, setProduct] = useState([]);

    async function getAlfa() {
        try {
            const res = await apiClient.get(`/search.php?f=${value}`);
            console.log(res);  
            setProduct(res.data.meals);  
        } catch (error) {
            console.log(error);  
        }
    }

    useEffect(() => {
        getAlfa();  
    }, [value]);

    return (
        <div>
            <h1>{value} Тамактар</h1>
            <ProductList data={product} />
            <Alfa /> 
        </div>
    );
}

export default Alfa1;






