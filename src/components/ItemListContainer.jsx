import ItemCount from './ItemCount.jsx';
import ItemList from './ItemList.jsx';
import customFetch from "../utils/customFetch";
import { useEffect, useState } from 'react';
const { products } = require('../utils/products');

function ItemListContainer(){    
    const [datos, setDatos] = useState(0);

    useEffect(() => {
        customFetch(2000, products)
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, []);

    const onAdd = (qty) => {
        alert("Se han agregado " + qty + " items al carrito.")
        qty = 0;
    }
    
    return (
        <>
        <ItemList items={datos}/>
        <ItemCount stock={5} initial={0} onAdd={onAdd}/>
        </>
    );
}

export default ItemListContainer;