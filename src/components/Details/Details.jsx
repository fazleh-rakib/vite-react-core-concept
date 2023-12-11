import React from 'react';
import Knob from '../Knob/Knob';

const Details = (props) => {
    console.log(props.state);
    return (
        <div style={{border: '2px solid orange', margin:'20px', padding:'20px'}}>
            <h2>  count is here :{props.state} </h2>
            <Knob state ={props.state} />
        </div>
    );
};

export default Details;