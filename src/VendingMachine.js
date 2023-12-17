import React from 'react';
import {Link} from "react-router-dom";
import "./VendingMachine.css";


const VendingMachine = () => {

    return (
        <div className='Vending'>
            <h1>Welcome to Jeremy's Vending Machine</h1>
            <h2>Please make a selection</h2>
            <div>
            <Link to="/chips">Chips</Link>
            <Link to="/pretzels">Pretzels</Link>
            <Link to="/soda">Soda</Link>
            </div>  
            <img src='https://cdn1.vectorstock.com/i/1000x1000/35/95/vending-machine-cartoon-snack-and-drinks-selling-vector-42283595.jpg' alt='A vending machine'/>
            
        </div>     
    );
};

export default VendingMachine;