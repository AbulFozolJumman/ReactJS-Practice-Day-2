import React from 'react';
import './Meal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'

const Meal = ({meal, showInCart}) => {
    return (
        <div>
            <div className="meal">
                <h2>{meal.strMeal}</h2>
                <img src={meal.strMealThumb} alt="" />
                <button onClick={() => showInCart(meal)}>Submit
                <FontAwesomeIcon icon={faCartShopping} />
                </button>
            </div>
        </div>
    );
};

export default Meal;