import Item from './Item';
import { ProductsContainer } from './styledComponents';

const ItemList = ({items}) => {
    return(
        <ProductsContainer>
            {
            items.length > 0
            ? items.map(item => <Item key ={items.id} title={item.name} price={item.price} pictureUrl={item.image[0]} stock={item.stock}/>)            
            : <p>Cargando...</p>
            }
        </ProductsContainer>
    );
}

export default ItemList;