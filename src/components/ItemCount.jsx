import {useState, useEffect} from 'react';

    const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {

    const [items, setItems] = useState(0);

    useEffect(() => {
        setItems(initial);
    },[]);

    const SumarItems = () => {
        if(items<stock){
            setItems(items + 1);
        }
            
    }

    const RestarItems = () => {
        if (items > initial) {
            setItems(items - 1);
        }
    }

    return (
        <div className='itemCount-container' id='itemCount-container'>
        <div className='modifCuenta-container' id='modifCuenta-container'>
            <button className='btn btn-danger' onClick={RestarItems}>-</button>
            <strong>{items} Items</strong>
            <button className='btn btn-success' onClick={SumarItems}>+</button>
        </div>
        <button className='btn btn-dark' onClick={() => onAdd(items)}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;