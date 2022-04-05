import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    
    const onAdd = (qty) => {
        alert("Seleccionaste "+qty+" Items.");
    }
    
    return (<>
    {
        item.image
        ?
        <div>
            <img src={item.image[0]}/>
            <div className="infoContainer">
                <strong className="Nombre">{item.name}</strong>
                <p className="Descripcion">{item.description}</p>
                <strong className="Precio">$ {item.cost}</strong>
                <p className="Stock">{item.stock} Unidades en stock.</p>
            </div>
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
        </div>
        : <p>Cargando...</p>
    }
    </>);
}

export default ItemDetail;
