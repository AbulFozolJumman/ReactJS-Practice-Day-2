import React from 'react';
import './MealCart.css'

const MealCart = (props) => {
    // console.log(props)
    const hhh = props.cartName;
    return (
        <div className="meal-cart">
            {hhh.map(jjj => <h2>{jjj}</h2>)}
        </div>
    );
};

export default MealCart;