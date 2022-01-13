import { Badge } from "@material-ui/core"
import { LocalMallOutlined, PersonOutline, Search, SearchOutlined, Menu, Close } from "@material-ui/icons"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { mobile } from "../responsive"
import { Link } from "react-router-dom"
import { useState } from "react"
import Navigation from "./Navigation"
import { logOut } from "../redux/userRedux"
import { clearCart } from "../redux/cartRedux"
import { changeTheme } from "../redux/themeRedux"


const Container = styled.div`
    height: 60px;
    background: ${props => props.theme.bgSecondary};
    font-size: 1.4rem;
    // border-bottom: 1px solid rgba(255,69,69, 0.1);

`
const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
`
const Left = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 2;
    text-align:center;

    ${mobile({ flex: 1, })}
`
const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: #202020;
    box-sizing: border-box;
    padding: 20px;
    position: relative;
    z-index: 3;
`
const Input = styled.input`
    width: 80%;
    border: 1px solid gray;
    padding: 10px;
    padding-left: 8vw;
    background: #202020;
`
const SearchIcon = styled.div`
    position: absolute;
    top: 27px;
    left: 7vw;
`

const Center = styled.div`
    display:flex;
    flex: 7;
    justify-content:space-between;

    ${mobile({
    display: "none"
})}
`
const Logo = styled.h1`
    margin: 0;
    padding: 5px;
    border-bottom: 5px solid #FF3535;
    font-size: 1.2rem;
    font-family: 'Ubuntu', sans-serif;
    letter-spacing: 2px;
    color:${props => props.theme.fontColorPrimary};
`

const Right = styled.div`
    display: flex;
    justify-content: space-evenly;

    flex: 3;
    ${mobile({ flex: 2 })}
`

const MenuOption = styled.div`
    position: relative;
    height: 60px;
    display:flex;
    align-items:center;
    letter-spacing: 1px;
    cursor:pointer;
    color: ${props => props.theme.fontColorPrimary};

    
    &:hover > ul {
        display: block;
    }
`

const MenuItem = styled.ul`
    background: ${props => props.theme.bgSecondary};
    border: 1px solid rgba(255,69,69, 0.5);
    padding: 10px;
    position: absolute;
    text-align: left;
    top: 80%;
    display:none;
    color: ${props => props.theme.fontColorPrimary};
    z-index: 2;
`
const MenuItems = styled.li`
    list-style: none;
    padding: 5px;
    white-space: nowrap;
    cursor:pointer;


    &:hover{
        text-decoration: underline;
    }
`

const NavigationMenu = styled.div`
    position: absolute;
    box-sizing: border-box;
    top: 60px;
    width: 100%;
    background: ${props => props.theme.bgSecondary};
    color: ${props => props.theme.fontColorPrimary};

    display: none;
    z-index: 3;
    ${mobile({ display: "block" })}
`
const NavigationToggle = styled.div`
    flex:1;
    display:none;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    color: ${props => props.theme.fontColorPrimary};

    ${mobile({ display: "flex" })}
`
const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity)
    const [navigation, setNavigation] = useState(false)
    const [searchBar, setSearchBar] = useState(false)
    const [searchText, setSearchText] = useState("")
    const user = useSelector(state => state.user.currentUser)
    const activeTheme = useSelector(state => state.theme.active)
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(
            logOut()
        )
        dispatch(
            clearCart()
        )
    }

    const switchTheme = () => {
        dispatch(changeTheme())
    }

    return (
        <Container>
            <Wrapper>
                <NavigationToggle>
                    {navigation ? <Close style={{ fontSize: "2rem" }} onClick={() => setNavigation(!navigation)}></Close> : <Menu style={{ fontSize: "2rem" }} onClick={() => setNavigation(!navigation)}></Menu>}
                </NavigationToggle>
                <Left>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <Logo>ACTION <br />CORE</Logo>
                    </Link>
                </Left>
                <Center>
                    <MenuOption>PRODUCTS
                        <MenuItem>
                            <MenuItems>Laptops</MenuItems>
                            <MenuItems>Phones</MenuItems>
                            <MenuItems>Desktops</MenuItems>
                            <MenuItems>Motherboards</MenuItems>
                            <MenuItems>Graphic Cards</MenuItems>
                            <MenuItems>Monitors</MenuItems>
                            <MenuItems>Power Supply</MenuItems>
                            <MenuItems>External Graphics</MenuItems>
                            <MenuItems>Networking</MenuItems>
                            <MenuItems>Keyboards</MenuItems>
                            <MenuItems>Mice & Mouse Pads</MenuItems>
                            <MenuItems>Headset & Audio</MenuItems>
                            <MenuItems>Cases</MenuItems>
                            <MenuItems>Apprarel, Bags & Gear</MenuItems>
                            <MenuItems>Streaming Kit</MenuItems>
                            <MenuItems>Controllers</MenuItems>
                            <MenuItems>Storage</MenuItems>
                            <MenuItems>Cooling</MenuItems>
                        </MenuItem>
                    </MenuOption>
                    {/* <MenuOption>INNOVATION
                        <MenuItem>
                            <MenuItems>Aura</MenuItems>
                            <MenuItems>Intelligent Cooling</MenuItems>
                        </MenuItem>
                    </MenuOption> */}
                    <MenuOption>DOWNLOAD
                        <MenuItem>
                            <MenuItems>Wallpaper</MenuItems>
                            <MenuItems>Aura Sync</MenuItems>
                            <MenuItems>Armoury Crate</MenuItems>
                            <MenuItems>India Product Guide</MenuItems>
                        </MenuItem>
                    </MenuOption>
                    <MenuOption>COMMUNITY
                        <MenuItem>
                            <MenuItems>Elite Program</MenuItems>
                            <MenuItems>esports teams</MenuItems>
                            <MenuItems>Blogs</MenuItems>
                            <MenuItems>News and Articles</MenuItems>
                        </MenuItem>
                    </MenuOption>
                    <MenuOption>SERVICE
                        <MenuItem>
                            <MenuItems>Support</MenuItems>
                            <MenuItems>Find Service Location</MenuItems>
                            <MenuItems>Check Repair Status</MenuItems>
                            <MenuItems>Check Warranty status</MenuItems>
                            <MenuItems>We are now on Whatsapp!</MenuItems>
                        </MenuItem>
                    </MenuOption>
                    <MenuOption>STORES & OFFERS
                        <MenuItem>
                            <MenuItems>Where to Buy</MenuItems>
                            <MenuItems>Laptop & Desktop Offers</MenuItems>
                        </MenuItem>
                    </MenuOption>

                </Center>
                <Right>
                    <MenuOption onClick={() => setSearchBar(!searchBar)}>
                        <SearchOutlined style={{ fontSize: "2rem" }}></SearchOutlined>
                    </MenuOption>
                    <MenuOption>
                        <PersonOutline style={{ fontSize: "2rem" }}></PersonOutline>
                        <MenuItem style={{ zIndex: "4" }}>
                            {!user && <Link to="/login" style={{ textDecoration: "none" }}><MenuItems>Login</MenuItems></Link>}
                            {user && <Link to="/orders" style={{ textDecoration: "none" }}><MenuItems>Orders</MenuItems></Link>}
                            {!user && <Link to="/register" style={{ textDecoration: "none" }}><MenuItems>Register</MenuItems></Link>}
                            {user && <MenuItems onClick={logout}>Log Out</MenuItems>}
                            <MenuItems onClick={switchTheme}>{activeTheme === "light" ? "Dark theme" : "Light theme"}</MenuItems>
                        </MenuItem>
                    </MenuOption>
                    <Link to="/cart">
                        <MenuOption>
                            <Badge badgeContent={quantity} color="error">
                                <LocalMallOutlined style={{ fontSize: "2rem" }}></LocalMallOutlined>
                            </Badge>
                        </MenuOption>
                    </Link>
                </Right>
                <NavigationMenu>
                    {navigation && <Navigation />}
                </NavigationMenu>
            </Wrapper>
            {searchBar && <SearchContainer>
                <Input onChange={(e) => setSearchText(e.target.value)} />
                <SearchIcon>
                    <Link to={`/searchProducts/${searchText}`}>
                        <Search style={{ color: "gray", fontSize: "28", cursor: "pointer" }} />
                    </Link>
                </SearchIcon>
                <Close style={{ color: "gray", cursor: "pointer" }} onClick={() => setSearchBar(!searchBar)}></Close>
            </SearchContainer>}
        </Container>
    )
}

export default Navbar