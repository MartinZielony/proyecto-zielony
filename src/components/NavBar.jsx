import CartWidget from "./CartWidget.jsx";
import { Link } from 'react-router-dom';
import { AppBar } from "@mui/material";
import { Wrapper, Logo, MenuItem, Left, Center, Right } from "./styledComponents.jsx";

const NavBar = () => {
    return (
        <AppBar position="relative" style={{ background: '#f06c9c' }}>
            <Wrapper>
                <Left>
                    <Link to='/' style={{ TextDecoration: 'none', color: '#ffde2d' }}><Logo>PINK LEMON</Logo></Link>
                </Left>
                <Center>
                    <Link to='/category/1' style={{ textDecoration: "none", color: '#ffde2d'}}><MenuItem>Accesorios</MenuItem></Link>
                    <Link to='/category/2' style={{ textDecoration: "none", color: '#ffde2d'}}><MenuItem>Masajeadores</MenuItem></Link>
                    <Link to='/category/3' style={{ textDecoration: "none", color: '#ffde2d'}}><MenuItem>Cremas</MenuItem></Link>
                    <Link to='/category/4' style={{ textDecoration: "none", color: '#ffde2d'}}><MenuItem>Mascarillas</MenuItem></Link>
                    <Link to='/category/5' style={{ textDecoration: "none", color: '#ffde2d'}}><MenuItem>Combos</MenuItem></Link>
                    <Link to='/category/6' style={{ textDecoration: "none", color: '#ffde2d'}}><MenuItem>Otros</MenuItem></Link>
                </Center>
                <Right>
                    <MenuItem style={{ textDecoration: "none", color: "#ffde2d" }}>Registrarse</MenuItem>
                    <MenuItem style={{ textDecoration: "none", color: "#ffde2d" }}>Iniciar Sesión</MenuItem>
                    <MenuItem><Link to='/cart' style={{ textDecoration: "none", color: "#ffde2d" }}><CartWidget /></Link></MenuItem>
                </Right>
            </Wrapper>
        </AppBar>
    );
}

export default NavBar;