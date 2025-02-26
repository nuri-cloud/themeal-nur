
import React, { useState, useEffect } from 'react';
import apiClient from '../Axios/apiClient';
import ProductList from '../Components/ProductList/ProductList';
import { useParams } from 'react-router-dom';

function Search() {
    const { text } = useParams();
    const [product, setProduct] = useState([]);


    async function getProduct(query) {
        try {
            const res = await apiClient.get(`/search.php?s=${query}`);
            console.log(res);
            setProduct(res.data.meals || []);
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        if (text) {
            getProduct(text);
        }
    }, [text]);

    return (
        <div className='container'>
            <main>
                <section>
                    <h2>Search "{text}"</h2>
                    <ProductList data={product} />
                </section>
            </main>
        </div>
    );
}

export default Search;

