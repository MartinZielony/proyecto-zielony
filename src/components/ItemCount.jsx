import { Button } from '@mui/material';
import {Add, Remove} from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { ProductAmountContainer, ProductAmount } from './styledComponents';

    const ItemCount = ({ stock, initial, onAdd }) => {
        const [items, setItems] = useState(0);

    useEffect(() => {
        setItems(initial);
    }, [initial]);

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
        <ProductAmountContainer>
            <Button variant='text' onClick={SumarItems}><Add/></Button>
            <ProductAmount>{items}</ProductAmount>
            <Button variant='text' onClick={RestarItems}><Remove/></Button>
            {
                stock
                ?<Button variant="contained" onClick={() => onAdd(items)}>Agregar al Carrito</Button>
                :<Button variant="contained" disabled>Agregar al Carrito</Button>
            }
        </ProductAmountContainer>
    );
}

export default ItemCount;