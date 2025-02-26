
import React from 'react';
import { Link } from 'react-router-dom';
import { Alfa2 } from '../../data/Alfa2';  
import './Alfa.css'



const API = "https://www.themealdb.com/browse/letter"


function Alfa() {
    return (
        <div className="div">
            {
                Alfa2.map((item1) => (
                    <Link to={`/alfa1/${item1.title}`} key={item1.id} className="letter-link">
                        <span>{item1.title}</span> 
                    </Link>
                ))
            }
        </div>
    );
}

export default Alfa;






