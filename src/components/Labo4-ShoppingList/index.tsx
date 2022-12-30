import styles from "./ShoppingList.module.css";
import React, { useState } from "react";

interface ShoppingListItem{
  name: string;
  quantity: number;
}

const Shoppinglist = () => {
  const [productName, setProductName] = useState<string>('');
  const [productAmount, setProductAmount] = useState<number>(0);
  const [shoppingList, setShoppingList] = useState<ShoppingListItem[]>([{
    name: "Aardbeiden",
    quantity: 15
  }]);
  const addShoppingItem = () => {
    if (productAmount < 1){
      setErrorMessage("Quantity should be above 0");
      setSuccesMessage("");
    } else{
        setShoppingList([...shoppingList, {name: productName, quantity: productAmount}]);
        setSuccesMessage("Item added to shopping list");
        setErrorMessage("");
    }
  };
  const removeShoppingItem = (index: number) => {
    let shoppingListCopy = shoppingList.filter((item, i) => i !== index);
    setShoppingList(shoppingListCopy);
    setSuccesMessage("Item was removed from shopping list");
    setErrorMessage("");
  }
  const [succesMessage, setSuccesMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  return (
    <>
    <div>
      {succesMessage && <p className={styles.succes}>{succesMessage}</p>}
      {errorMessage &&  <p className={styles.error}> {errorMessage}</p>}
    <div className={styles.shoppingForm}>
      <label>Name:</label>
      <input type="text" className={styles.shoppingInput} placeholder="Name" value={productName} onChange={(event) =>  setProductName(event.target.value)}/>
      <label>Quantity:</label>
      <input type="number" className={styles.shoppingInput} placeholder="Quantity" value={productAmount} onChange={(event) =>  setProductAmount(parseInt(event.target.value))}/>
    </div>
    </div>
    <button onClick={addShoppingItem}>Add</button>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Quantity</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          shoppingList.map((item, index) => (
            <tr>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td><button onClick={() => {removeShoppingItem(index)}}>Remove</button></td>
            </tr>
          ))}    
      </tbody>
    </table>
    </>
  );
}

const App = () => {
  return (
    <div className={styles.App}>
      <Shoppinglist/>
    </div>
  );
}

export default App;