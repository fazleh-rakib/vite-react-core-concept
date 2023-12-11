import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    const cosmetics = [
        {id: 1, name:'alta', price: 100},
        {id: 2, name:'lipstic', price: 150},
        {id: 3, name:'creame', price: 1012},
        {id: 4, name:'pallish', price: 300},
        {id: 5, name:'balish', price: 250},
    ]
    return (
        <div>
            <h2>This is cosmetics</h2>
            {
                cosmetics.map(cosmetic => <Cosmetic
                key ={cosmetic.id}
                     cosmetic = {cosmetic} />)
            }
        </div>
    );
};

export default Cosmetics;