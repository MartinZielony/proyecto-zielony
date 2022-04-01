const Item = ({title, stock, price, pictureUrl}) => {
    return (
        <div>
            <img src={pictureUrl}/>
            <strong>Precio: $ {price}</strong>
            <span>{stock} unid.</span>
        </div>
    )
}

export default Item;