import Item from './Item';

const ItemList = ({items}) => {
    return(
        <div>
            {
            items.length > 0
            ? items.map(item => <Item key ={items.id} title={item.name} price={item.price} pictureUrl={item.image[0]} stock={item.stock}/>)            
            : <p>Cargando...</p>}
        </div>
    );
}

export default ItemList;