import React from "react";
import { Link } from "react-router-dom";
import "./ItemList.css";

function ItemList(props, handleDeleteItem) {
  return (
    <div className="itemWrapper">
      <div className="itemDetails">
        <div>
          {console.log('Props: ', props)}
          <img
            src={
              props.item.cover
                ? props.item.cover
                : require("../../images/placeholder.jpg")
            }
            alt="Cover"
          />
        </div>
        <div>
          <h3>{props.item ? props.item.name : ""}</h3>
        </div>
        <div>
          <h4>VALUE: ${props.item ? props.item.value : ""}</h4>
        </div>
      </div>
      <div className="ItemListPanel btn-group btn-group-justified">
        <div className="btn-group" role="group">
          <Link
            className="btn btn-default btn-primary"
            to={{
              pathname: "/details",
              state: { item: props.item },
            }}
          >
            DETAILS
          </Link>
        </div>
        <div className="btn-group" role="group">
          <Link
            className="btn btn-default btn-info"
            to={{
              pathname: "/edit-item",
              state: { item: props.item },
            }}
          >
            EDIT
          </Link>
        </div>
        <div className="btn-group" role="group">
          <button
            className="btn btn-default btn-danger"
            onClick={() => props.handleDeleteItem(props.item._id)}
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemList;
