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
                    <Link to='/category/9' style={{ textDecoration: "none", color: '#ffde2d'}}><MenuItem style={{}}>Sin Alcohol</MenuItem></Link>
                    <Link to='/category/1' style={{ textDecoration: "none", color: '#ffde2d'}}><MenuItem>Vinos</MenuItem></Link>
                    <Link to='/category/5' style={{ textDecoration: "none", color: '#ffde2d'}}><MenuItem>Licores</MenuItem></Link>
                </Center>
                <Right>
                    <MenuItem style={{ textDecoration: "none", color: "#ffde2d" }}>Registrarse</MenuItem>
                    <MenuItem style={{ textDecoration: "none", color: "#ffde2d" }}>Iniciar Sesión</MenuItem>
                    <MenuItem style={{ textDecoration: "none", color: "#ffde2d" }}><CartWidget /></MenuItem>
                </Right>
            </Wrapper>
        </AppBar>
    );
}

export default NavBar;