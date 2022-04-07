import CartWidget from "./CartWidget.jsx";
import { Link } from 'react-router-dom';
import { AppBar } from "@mui/material";
import { Wrapper, Logo, MenuItem, Left, Center, Right } from "./styledComponents.jsx";

const NavBar = () => {
    return (
        <AppBar position="relative">
            <Wrapper>
                <Left>
                    <Link to='/' style={{TextDecoration:'none'}}><Logo>PINK LEMON</Logo></Link>
                </Left>
                <Center>
                    <Link to='/category/9' style={{textDecoration: "none", color: "white"}}><MenuItem>Sin Alcohol</MenuItem></Link>
                    <Link to='/category/1' style={{textDecoration: "none", color: "white"}}><MenuItem>Vinos</MenuItem></Link>
                    <Link to='/category/5' style={{textDecoration: "none", color: "white"}}><MenuItem>Licores</MenuItem></Link>
                </Center>
                <Right>
                <MenuItem>Registrarse</MenuItem>
                    <MenuItem>Iniciar Sesión</MenuItem>
                    <MenuItem><CartWidget /></MenuItem>
                </Right>
            </Wrapper>
        </AppBar>
    );
}

export default NavBar;