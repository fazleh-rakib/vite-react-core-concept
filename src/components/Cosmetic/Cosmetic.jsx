import React from 'react';

const Cosmetic = (props) => {
  const {id , name, price}= props.cosmetic
    return (
        <div>
            <h2>this is cosmetic : {id}</h2>
            <h2>Name Of Cosmetic : {name}</h2>
            <p>price: {price}</p>
        </div>
    );
};

export default Cosmetic;