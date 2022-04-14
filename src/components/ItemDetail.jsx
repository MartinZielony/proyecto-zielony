import { Button } from "@mui/material";
import { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import {Link} from 'react-router-dom';
import { DetailContainer, WrapperDetail, ImgContainer, ImageDetail, InfoContainer, Title, Desc, Price } from "./styledComponents";
import { CartContext } from '../contexts/CartContext'

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext);

    const onAdd = (qty) => {
        alert("Seleccionaste " + qty + " Items.");
        setItemCount(qty);
        test.agregarAlCarrito(item, qty);
    }

    return (
        <>
            {
                item && item.image
                    ?
                    <DetailContainer>
                        <WrapperDetail>
                            <ImgContainer>
                                <ImageDetail src={item.image[0]} />
                            </ImgContainer>
                            <InfoContainer>
                                <Title>{item.name}</Title>
                                <Desc>{item.description}</Desc>
                                <Price>$ {item.cost}</Price>
                                <Desc>{item.stock} unid. en Stock</Desc>
                            </InfoContainer>
                            {
                                itemCount === 0
                                    ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                                    : <Link to='/cart' style={{ textDecoration: 'none' }}><Button variant='contained'style={{background:'#f06c9c'}}>Ver Carrito</Button></Link>
                            }
                        </WrapperDetail>
                    </DetailContainer>
                    : <p>Cargando...</p>
            }
        </>
    );
}

export default ItemDetail;
