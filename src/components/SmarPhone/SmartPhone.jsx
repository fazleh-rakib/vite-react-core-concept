import React from 'react';
import { add } from '../Common/calculate';


const SmartPhone = () => {
    const num1 = 25
    const num2 = 25
    const result = add(num1,num2)
    return (
        <div>
            <h2>All Smartphone :{result}</h2>
        </div>
    );
};

export default SmartPhone;