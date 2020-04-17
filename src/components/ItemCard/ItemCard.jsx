import React from "react";
import { Link } from "react-router-dom";

function ItemCard({ item }) {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">{item.name}</h3>
      </div>
      <div className="panel-body">
        <dl>
          <dt>Value</dt>
          <dd>{item.value}</dd>
          <dt>Description</dt>
          <dd>{item.description}</dd>
        </dl>
      </div>
      <div className="panel-footer">
        <Link to="/">RETURN TO LIST</Link>
      </div>
    </div>
  );
}

export default ItemCard;
