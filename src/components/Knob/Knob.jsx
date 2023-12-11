import React from 'react';

const Knob = (props) => {
    return (
        <div style={{border: '2px solid yellow', margin:'20px', padding:'20px'}}>
            <h2> This is Knob :{props.state}</h2>
        </div>
    );
};

export default Knob;