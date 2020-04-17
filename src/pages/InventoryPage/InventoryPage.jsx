import React from "react";
import { Link } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";
import styles from "./InventoryPage.module.css";

function InventoryPage(props) {
  return (
    <>
      <h1>INVENTORY</h1>
      <Link to="/new-item">+ ADD ITEM</Link>
      <div className={styles.InventoryListGrid}>
        {props.items.map((item) => (
          <ItemList
            item={item}
            handleDeleteItem={props.handleDeleteItem}
            // key={item.name}
          />
        ))}
      </div>
    </>
  );
}

export default InventoryPage;
