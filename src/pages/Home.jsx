import React, { useState, useEffect } from 'react';
import './Home.css';
import apiClient from '../Axios/apiClient';
import ProductList from '../Components/ProductList/ProductList';
import Country from '../Components/Country/Country';
import Alfa from '../Components/Alfa/Alfa';

function Home() {
    const [product, setProduct] = useState([]); 
    const [searchTerm, setSearchTerm] = useState(''); 
    const [loading, setLoading] = useState(false); 

 
    async function getProduct() {
        if (!searchTerm) return;

        setLoading(true);
        try {
            const res = await apiClient.get(`/search.php?s=${searchTerm}`);
            console.log(res);
            setProduct(res.data.meals || []);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getProduct();
    }, [searchTerm]);

    return (
        <div className='container'>
            <main>
                <section className='section1'>
                    <div className='block'>
                        <img src="https://www.themealdb.com/images/meal-icon.png" alt="" />
                        <div className='text'>
                            <h1>Welcome to TheMealDB</h1>
                            <p>
                                Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.
                                We also offer a <span className='free'>free recipe API</span> for anyone wanting to use it, with additional features for subscribers.
                            </p>
                            <button className='button'>
                                <span className='Pay'>Pay</span><span className='Pal'>Pal</span>
                            </button>
                            <p>
                                Click button above to upgrade free Recipe API to premium. $3 month and cancel anytime. Currently 54 supporters.
                            </p>
                        </div>
                        <img src="https://www.themealdb.com/images/meal-icon.png" alt="" />
                    </div>

                    <div className='block1'>
                        <div className='line'></div>
                        <div className="search-container">
                            <input
                                type="text"
                                placeholder="Search for a Meal..."
                                className="search-input"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)} 
                            />
                            <div className="search-icon">
                                <img src="https://www.themealdb.com/images/icons/meal-icon6.png" alt="" />
                            </div>
                        </div>
                        <div className="stats">
                            <div>
                                <img src="https://www.themealdb.com/images/icons/meal-icon6.png" alt="" />
                                <p>Total Meals: 303</p>
                            </div>
                            <div>
                                <img src="https://www.themealdb.com/images/icons/meal-icon4.png" alt="" />
                                <p>Total Ingredients: 575</p>
                            </div>
                            <div>
                                <img src="https://www.themealdb.com/images/icons/image2.png" alt="" />
                                <p>Images: 303</p>
                            </div>
                        </div>
                        <div className='line'></div>
                    </div>
                </section>
                <section>
                    {loading ? (
                        <p>Loading...</p> 
                    ) : (
                        <ProductList data={product} />
                    )}
                    <Country />
                    <Alfa />
                </section>
            </main>
            <div>
                <h1>NURZADA LOVE</h1>
            </div>
        </div>
    );
}

export default Home;



