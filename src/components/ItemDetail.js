import React, { useEffect, useState } from "react";

function ItemDetail({ match }) {
  useEffect(() => {
    fetchItem();
  }, []);
  const [item, setItem] = useState({
    images: {},
  });
  const fetchItem = async () => {
    const data = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
    );
    const item = await data.json();
    console.log(item.data.item);
    setItem(item.data.item);
  };
  return (
    <div>
      <h2>{item.name}</h2>
      <img src={item.images.icon} alt="" />
    </div>
  );
}

export default ItemDetail;
