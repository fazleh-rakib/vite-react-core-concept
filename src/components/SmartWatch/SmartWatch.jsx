import React from 'react';
import { add, multi } from '../Common/calculate';

const SmartWatch = () => {
    const result = multi(20,6)
    const sum = add(25,75)
    return (
        <div>
            <h2>This is smartWatch = {result}</h2>
            <p>All sum {sum}</p>
        </div>
    );
};

export default SmartWatch;