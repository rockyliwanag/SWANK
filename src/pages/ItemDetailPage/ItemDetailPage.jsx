import React from "react";
import ItemCard from "../../components/ItemCard/ItemCard";

function ItemDetailPage(props) {
  // Refer to ItemList to see how item is being passed via the <Link>
  const item = props.location.state.item;
  return (
    <>
      <h1>Item Details</h1>
      <ItemCard key={item._id} item={item} />
    </>
  );
}

export default ItemDetailPage;
