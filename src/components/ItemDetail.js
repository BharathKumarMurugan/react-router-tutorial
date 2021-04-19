import React, { useEffect, useState } from "react";

function ItemDetail({ match }) {
    useEffect(() => {
        fetchItem();
    }, []);
    const [item, setItem] = useState({
        images: {},
    });
    const [isLoading, setIsLoading, isError, setIsError] = useState(false);
    const fetchItem = async () => {
        setIsLoading(true);
        const data = await fetch(
            `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
        );
        if (data.ok) {
            const item = await data.json();
            console.log(item.data.item);
            setItem(item.data.item);
            setIsLoading(false);
        } else {
            setIsLoading(false);
            setIsError(true);
        }
    };
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error...</div>;
    return (
        <div>
            <h2>{item.name}</h2>
            <img src={item.images.icon} alt="" />
        </div>
    );
}

export default ItemDetail;
