import ItemCount from './ItemCount.jsx';
import ItemList from './ItemList.jsx';
import customFetch from "../utils/customFetch";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router'
const { products } = require('../utils/products');

const ItemListContainer = () => {    
    const [datos, setDatos] = useState([]);
    const idCategory = useParams();

    console.log(idCategory);

    useEffect(() => {
        customFetch(2000, products)
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [datos]);

    const onAdd = (qty) => {
        alert("Se han agregado " + qty + " items al carrito.")
    }
    
    return (
        <>
        <ItemList items={datos}/>
        </>
    );
}

export default ItemListContainer;