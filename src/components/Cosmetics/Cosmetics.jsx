import React, { useEffect, useState } from "react";
import Cosmetic from "../Cosmetic/Cosmetic";
import Demo from "../Cosmetic/Demo";


const Cosmetics = () => {
//   const [cosmetics, setCosmetics] = useState([]);
//   useEffect(() => {
//     fetch("https://cosmetic.free.beeceptor.com/")
//       .then((res) => res.json())
//       .then((data) => setCosmetics(data));
//   }, []);
const cosmetics = [
    {
      "id": "65794d066e6185c0af61862e",
      "price": 338,
      "name": "Valentine Odonnell"
    },
    {
      "id": "65794d06b68ab7497ced2519",
      "price": 45,
      "name": "Conrad Richards"
    },
    {
      "id": "65794d06b31ae07dc0dc918e",
      "price": 353,
      "name": "Hampton Joseph"
    },
    {
      "id": "65794d06ec6f027b6961171e",
      "price": 72,
      "name": "Tyler Madden"
    },
    {
      "id": "65794d06189bc3e36e33c8bd",
      "price": 262,
      "name": "Leah Hood"
    }
  ]
  return (
    <div>
      <h2>This is cosmetics</h2>
      {cosmetics.map((cosmetic) => (
        <Cosmetic key={cosmetic.id} cosmetic={cosmetic} />
      ))}
   
    </div>
  );
};

export default Cosmetics;
