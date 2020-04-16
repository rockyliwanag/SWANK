import React from "react";
import { Link } from "react-router-dom";
import "./ItemList.css";

function ItemList(props, handleDeleteItem) {
  return (
    <div>
      <div>
        <h3>{props.item.name}</h3>
      </div>
      <div className="ItemListPanel">
        <Link to="#">DETAILS</Link>
        <Link to="#">EDIT</Link>
        <button
          className="btn btn-xs btn-danger margin-left-10"
          onClick={() => props.handleDeleteItem(props.item._id)}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

export default ItemList;
