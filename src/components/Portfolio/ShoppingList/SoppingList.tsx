import React, { useState } from 'react';
import logo from './logo.svg';
import styles from "./ShoppingList.module.css"
import Abbout from '../../Abbout/Abbout';

interface ShoppingListItem {
  name: string;
  quantity: number;
}

const ShoppingList = () => {
  const [ShoppingList, setShoppinglist] = useState<ShoppingListItem[]>([{
    name: "aardappelen",
    quantity: 5
  }])
  const [name, setName] = useState<string>("")
  const [quantity, setQuantity] = useState<number>(0)
  const [successMessage, setSuccesMessage] = useState<string>("")
  const [errorsMessage, setErrorMessage] = useState<string>("")

  const addShoppingItem = () => {
    if (quantity < 1) {
      setErrorMessage("Quantity should be above 0")
      setSuccesMessage("")
    }
    else {
      setShoppinglist([...ShoppingList, { name: name, quantity: quantity }]);
      setSuccesMessage("Item added to shopping list");
      setErrorMessage("");
    }
  }

  const removeShoppingItem = (index: number) => {
    let shoppingListCopy = ShoppingList.filter((item, i) => i !== index)
    setShoppinglist(shoppingListCopy)
    setSuccesMessage("Item removed from shopping list");
    setErrorMessage("")
  }


  return (
    <div className={styles.shoppingAddForm}>
      <div>
        {errorsMessage && <div className={styles.error}>
          {errorsMessage}
        </div>}
        {successMessage && <div className={styles.success}>
          {successMessage}
        </div>}

        <label>Name:</label>
        <input type="text" placeholder='name' value={name} onChange={(event) => setName(event.target.value)}></input>
        <label>Quantity:</label>
        <input type="number" placeholder="Quantity" value={quantity} onChange={(event) => setQuantity(parseInt(event.target.value))} />
        <button onClick={addShoppingItem}>Add</button>
      </div>
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
          ShoppingList.map((item, index) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>
                <button onClick={() => { removeShoppingItem(index) }}>Remove</button>
              </td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
    

  )
}

export default ShoppingList