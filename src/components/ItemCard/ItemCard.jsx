import React from "react";
import { Link } from "react-router-dom";
import "./itemCard.css";

function ItemCard({ item }) {
  return (
    <div className="card-container">
      <div>
        <img
          src={
            item.cover ? item.cover : require("../../images/placeholder.jpg")
          }
          alt="Cover"
        />
      </div>
      <div className="details-container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">{item.name}</h3>
          </div>
          <div className="panel-body">
            <dl>
              <dt>Value</dt>
              <dd>${item.value}.00</dd>
              <dt>Type</dt>
              <dd>{item.itemType}</dd>
              <dt>Description</dt>
              <dd>{item.description}</dd>
            </dl>
          </div>
          <div className="panel-footer">
            <Link to="/inventory">RETURN TO LIST</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
