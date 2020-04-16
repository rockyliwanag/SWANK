import React from "react";
import { Link } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";

function InventoryPage(props) {
  return (
    <>
      <h1>INVENTORY</h1>
      <Link to="/new-item">+ ADD ITEM</Link>
      {/* <div className="Item-list-grid"> */}
      {props.items.map((item) => (
        <ItemList
          item={item}
          /*handleDeleteItem={console.log(props.handleDeleteItem)}*/

          key={item._id}
        />
      ))}
      {/* </div> */}
    </>
  );
}

export default InventoryPage;
