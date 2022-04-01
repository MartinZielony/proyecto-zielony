import IconoCarrito from './shopping_cart_white_24dp.svg'; //Importo el archivo para luego llamarlo desde la función

const CartWidget = () => {
    return (
        <>
        <a href="#"><img src={IconoCarrito} alt="Ícono de Carrito"></img></a> 
        </>
    );
}

export default CartWidget;