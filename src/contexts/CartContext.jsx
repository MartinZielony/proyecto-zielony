import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);
    
    const agregarAlCarrito = (item, qty) => {
        let found = cartList.find(product => product.idItem === item.id);
        if (found === undefined){
            setCartList([
                ...cartList,
                {
                    idItem: item.id,
                    imgItem: item.image[0],
                    nameItem: item.name,
                    costItem: item.cost,
                    qtyItem: qty
                }
            ]);
        } else {
            //Al encontrar el item aumentamos su cantidad.
            found.qtyItem += qty;
        }
    }

    const borrarCarrito = () => {
        setCartList([]);
    }

    const borrarItem = (id) => {
        let result = cartList.filter(item => item.idItem !== id);
        setCartList(result);
    }

    return (
        <CartContext.Provider value={{cartList, agregarAlCarrito, borrarCarrito, borrarItem}}>
            {children}
        </CartContext.Provider>
    );
}
export default CartContextProvider;