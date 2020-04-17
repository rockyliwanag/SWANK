import React from "react";
import { Link } from "react-router-dom";
import "./ItemList.css";

function ItemList(props, handleDeleteItem) {
  return (
    <div>
      <div>
        <h3>{props.item ? props.item.name : ""}</h3>
      </div>
      <div className="ItemListPanel">
        <Link
          to={{
            pathname: "/details",
            state: { item: props.item },
          }}
        >
          DETAILS
        </Link>
        <Link
          className="btn btn-xs btn-info"
          to={{
            pathname: "/edit-item",
            state: { item: props.item },
          }}
        >
          EDIT
        </Link>
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
