import CartWidget from "./CartWidget.jsx";
import { Link, useResolvedPath, useMatch } from 'react-router-dom';
import { AppBar } from "@mui/material";
import { Wrapper, MenuItem, Left, Center, Right, Image } from "../styles/styledComponents";


//Links Customizados para mostrarse "activos" al ser clickeados
const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link to={to}
            {...props}
        >
            <MenuItem style={{ border: match ? "solid #ffde2d" : "none" }}>
                {children}
            </MenuItem>

        </Link>
    );
}


const NavBar = () => {
    return (
        <AppBar position="relative" style={{ background: '#f06c9c' }}>
            <Wrapper>
                <Left>
                    <Link to='/' style={{ textDecoration: "none" }}><Image src="https://firebasestorage.googleapis.com/v0/b/proyecto-ch-zielony.appspot.com/o/logoPL.png?alt=media&token=72f0f555-ff05-437a-84e4-01ca56faf929" /></Link>
                </Left>
                <Center>
                    <CustomLink to='/category/Accesorios' style={{ textDecoration: "none" }}>Accesorios</CustomLink>
                    <CustomLink to='/category/Masajeadores' style={{ textDecoration: "none" }}>Masajeadores</CustomLink>
                    <CustomLink to='/category/Cremas' style={{ textDecoration: "none" }}>Cremas</CustomLink>
                    <CustomLink to='/category/Mascarillas' style={{ textDecoration: "none" }}>Mascarillas</CustomLink>
                    <CustomLink to='/category/Combos' style={{ textDecoration: "none" }}>Combos</CustomLink>
                    <CustomLink to='/category/Otros' style={{ textDecoration: "none" }}>Otros</CustomLink>
                </Center>
                <Right>
                    <MenuItem><Link to='/cart' style={{ textDecoration: "none", color: "#ffde2d" }}><CartWidget /></Link></MenuItem>
                </Right>
            </Wrapper>
        </AppBar>
    );
}

export default NavBar;