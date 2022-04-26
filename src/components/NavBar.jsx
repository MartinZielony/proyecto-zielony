import CartWidget from "./CartWidget.jsx";
import { Link } from 'react-router-dom';
import { AppBar } from "@mui/material";
import { Wrapper, MenuItem, Left, Center, Right, Image } from "./styledComponents.jsx";

const NavBar = () => {
    return (
        <AppBar position="relative" style={{ background: '#f06c9c' }}>
            <Wrapper>
                <Left>
                    <Link to='/' style={{ textDecoration: "none"}}><Image src="https://firebasestorage.googleapis.com/v0/b/proyecto-ch-zielony.appspot.com/o/logoPL.png?alt=media&token=72f0f555-ff05-437a-84e4-01ca56faf929"/></Link>
                </Left>
                <Center>
                    <Link to='/category/Accesorios' style={{ textDecoration: "none"}}><MenuItem>Accesorios</MenuItem></Link>
                    <Link to='/category/Masajeadores' style={{ textDecoration: "none"}}><MenuItem>Masajeadores</MenuItem></Link>
                    <Link to='/category/Cremas' style={{ textDecoration: "none"}}><MenuItem>Cremas</MenuItem></Link>
                    <Link to='/category/Mascarillas' style={{ textDecoration: "none"}}><MenuItem>Mascarillas</MenuItem></Link>
                    <Link to='/category/Combos' style={{ textDecoration: "none"}}><MenuItem>Combos</MenuItem></Link>
                    <Link to='/category/Otros' style={{ textDecoration: "none"}}><MenuItem>Otros</MenuItem></Link>
                </Center>
                <Right>
                    <MenuItem><Link to='/cart' style={{ textDecoration: "none", color: "#ffde2d" }}><CartWidget /></Link></MenuItem>
                </Right>
            </Wrapper>
        </AppBar>
    );
}

export default NavBar;