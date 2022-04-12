import ItemCount from "./ItemCount";
import { DetailContainer, WrapperDetail, ImgContainer, ImageDetail, InfoContainer, Title, Desc, Price } from "./styledComponents";

const ItemDetail = ({ item }) => {
    
    const onAdd = (qty) => {
        alert("Seleccionaste "+qty+" Items.");
    }
    
    return (
        <>
        {
            item && item.image
            ?
            <DetailContainer>
                <WrapperDetail>
                    <ImgContainer>
                        <ImageDetail src={item.image[0]}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.name}</Title>
                        <Desc>{item.description}</Desc>
                        <Price>$ {item.cost}</Price>
                        <Desc>{item.stock} unid. en Stock</Desc>
                    </InfoContainer>
                    <ItemCount stock={item.stock} initial={0} onAdd={onAdd}/>
                </WrapperDetail>
            </DetailContainer>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;
