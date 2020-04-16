import React from "react";
import { Link } from "react-router-dom";

function ItemList(props, handleDeleteItem) {
  console.log(props);
  return (
    <div>
      <div>
        <h3>{props.item.name}</h3>
      </div>
      <div>
        <Link to="#">DETAILS</Link>
        <Link to="#">EDIT</Link>
        <button
          className="btn btn-xs btn-danger margin-left-10"
          onClick={() => handleDeleteItem(props.item._id)}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

export default ItemList;
