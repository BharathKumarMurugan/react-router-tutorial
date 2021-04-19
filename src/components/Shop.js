import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Shop() {
    useEffect(() => {
        fetchItems();
    }, []);
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading, isError, setIsError] = useState(false);
    const fetchItems = async () => {
        setIsLoading(true);
        const data = await fetch(
            "https://fortnite-api.theapinetwork.com/upcoming/get "
        );
        if (data.ok) {
            const items = await data.json();
            console.log(items.data[0].item);
            setItems(items.data);
            setIsLoading(false);
        } else {
            setIsLoading(false);
            setIsError(true);
        }
    };
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error..</div>;
    return items.length > 0 ? (
        <div>
            {items.map((data) => (
                <h2 key={data.itemId}>
                    <Link to={`/shop/${data.itemId}`}>{data.item.name}</Link>
                </h2>
            ))}
        </div>
    ) : (
        <div>0 Items</div>
    );
}

export default Shop;
