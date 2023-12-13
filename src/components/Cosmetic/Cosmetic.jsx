import React from "react";
import { addToDb } from "../Common/fakeDb";

const Cosmetic = (props) => {
  const { id, name, price } = props.cosmetic;
  const addToCard = (id) => {
    addToDb(id);
  };

  return (
    <div
      style={{ border: "2px solid orange", margin: "20px", padding: "20px" }}
    >
      <h2>this is cosmetic : {id}</h2>
      <h2>Name Of Cosmetic : {name}</h2>
      <p>price:$ {price}</p>
      {/* <button onClick={addToCaardWithPara }>Add to Card</button> */}
      <button onClick={() => addToCard(id)}>Purchase</button>
    </div>
  );
};

export default Cosmetic;
