import React, { useEffect, useState } from 'react';
import Meal from './Meal/Meal';
import MealCart from './MealCart/MealCart';
import './Meals.css'

const Meals = () => {
    const [meals, setMeal] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res => res.json())
        .then(data => setMeal(data.meals))
    }, [])

    const [cart, setCart] = useState([]);
    const showInCart = (meal) => {
        const name = meal.strMeal;
        const newCart = [...cart, name]
        setCart(newCart);
    }

    return (
        <div className='meal-container'>
            <div>
                {meals.map(meal => <Meal meal={meal} key={meal.idMeal} showInCart={showInCart}></Meal>)}
            </div>
            <MealCart cartName={cart}></MealCart>
        </div>
    );
};

export default Meals;