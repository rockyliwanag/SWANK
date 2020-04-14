import React, { Component } from "react";
import { Link } from "react-router-dom";

class InventoryPage extends Component {
  render() {
    return (
      <>
        <h1>INVENTORY</h1>
            <Link to="/new-item" className="">
                + ADD ITEM
            </Link>

        
      </>
    );
  }
}

export default InventoryPage;
