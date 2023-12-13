const addToDb = (id) => {
  const quantity = localStorage.getItem(id);
  if (quantity) {
    const newQuantity = parseInt(quantity) + 1;
    localStorage.setItem(id, newQuantity)
    console.log("exist");
  } else {
    console.log("new");
    localStorage.setItem(id, 1);
  }
};

export { addToDb };
