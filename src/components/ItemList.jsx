import Item from './Item';
import { ProductsContainer } from './styledComponents';

const ItemList = ({ items }) => {
    return (
        <ProductsContainer>
            {
                items.length > 0
                    ? items.map(item => <Item key={item.id} id={item.id} title={item.name} price={item.cost} pictureUrl={item.image[0]} stock={item.stock} />) //En el método map se usan los nombres que se le da a cada dato en el array de productos, por eso usé "cost" en vez de "price".
                    : <p>Cargando...</p>
            }
        </ProductsContainer>
    );
}

export default ItemList;