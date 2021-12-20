import { Badge } from "@material-ui/core"
import { LocalMallOutlined, PersonOutline, Search, SearchOutlined, ShoppingCartOutlined, Menu, Close } from "@material-ui/icons"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { mobile } from "../responsive"
import { Link } from "react-router-dom"
import { useState } from "react"
import Sidebar from "./Navigation"
import Navigation from "./Navigation"
import { logOut } from "../redux/userRedux"
import { clearCart } from "../redux/cartRedux"
// ${mobile({ height: "fit-content" })}


const Container = styled.div`
    height: 60px;
    // display:flex;
    // flex-direction: column;
    // z-index: 3;
    background:black;
`
const Wrapper = styled.div`
    // padding: 10px 20px;
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
    // border: 0.5px solid #FF3535;
    // z-index: 2;
    background: #202020;
    box-sizing: border-box;
    padding: 20px;
    position: relative;
    // height: 30px;
    z-index: 3;

`
const Input = styled.input`
    width: 80%;
    border: 1px solid gray;
    padding: 10px;
    padding-left: 8vw;
    background: #202020;
    color: white;

`
const SearchIcon = styled.div`
    position: absolute;
    top: 27px;
    left: 7vw;
`

const Center = styled.div`
    display:flex;
    flex: 8;
    justify-content:space-between;
    // text-align: center;
    // display: none;
    ${mobile({
    display: "none"
})}
`
const Logo = styled.h1`
    margin: 0;
    padding: 5px;
    border-bottom: 5px solid #FF3535;
    font-family: 'Ubuntu', sans-serif;
    font-size: 14px;
    letter-spacing: 2px;
    color:white;
    // text-decoration:none;
`

const Right = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex: 2;
    ${mobile({ flex: 2 })}
`

const MenuOption = styled.div`
    font-size: 12px;
    position: relative;
    height: 60px;
    display:flex;
    align-items:center;
    letter-spacing: 1px;
    cursor:pointer;

    &:hover{
        color: #FF3535;
    }
    &:hover > ul {
        display: block;
    }
    // &:first-of-type{
    //     display: none;
    //     ${mobile({ display: "flex" })}
    // }
`

const MenuItem = styled.ul`
    color: #191919;
    background-color: #F5F5F5;
    // border: 1px solid black;
    padding: 10px;
    position: absolute;
    text-align: left;
    top: 80%;
    display:none;
    z-index: 2;
    // display:flex;
`
const MenuItems = styled.li`
    list-style: none;
    font-size: 16px;
    padding: 5px;
    white-space: nowrap;
    cursor:pointer;

    &:hover{
        text-decoration: underline;
    }
`

const LoginButton = styled.span`
    background-color: #FF3535;
    color: #191919;
    padding: 5px 20px;
    border-radius: 4px;
`

const NavigationMenu = styled.div`
    position: absolute;
    box-sizing: border-box;
    top: 60px;
    width: 100%;
    background: #191919;
    border-top: 1px solid rgba(32, 32, 32,1);
    display: none;
    z-index: 3;
    ${mobile({ display: "block" })}
`
const NavigationToggle = styled.div`
    flex:1;
    display:none;
    align-items:center;
    justify-content:center;
    ${mobile({ display: "flex" })}
`
const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity)
    const [navigation, setNavigation] = useState(false)
    const [searchBar, setSearchBar] = useState(false)
    const user = useSelector(state => state.user.currentUser)
    console.log(user)
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(
            logOut()
        )
        dispatch(
            clearCart()
        )
    }

    return (
        <Container>
            <Wrapper>
                <NavigationToggle>
                    {navigation ? <Close onClick={() => setNavigation(!navigation)}></Close> : <Menu onClick={() => setNavigation(!navigation)}></Menu>}
                </NavigationToggle>
                <Left>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <Logo>ACTION <br />CORE</Logo>
                    </Link>
                </Left>
                <Center>
                    {/* <Language>EN</Language> */}

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
                        {/* <MenuItems>Phones</MenuItems>
                        <MenuItems>Desktops</MenuItems> */}
                    </MenuOption>
                    <MenuOption>INNOVATION
                        <MenuItem>
                            <MenuItems>Aura</MenuItems>
                            <MenuItems>Intelligent Cooling</MenuItems>
                        </MenuItem>
                    </MenuOption>
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
                        <SearchOutlined></SearchOutlined>
                    </MenuOption>
                    <MenuOption>
                        {/* <Link to="/login"> */}
                        <PersonOutline style={{ color: "white" }}></PersonOutline>
                        <MenuItem>
                            {!user && <Link to="/login"><MenuItems>Login</MenuItems></Link>}
                            {!user && <Link to="/register"><MenuItems>Register</MenuItems></Link>}
                            {user && <MenuItems onClick={logout}>Log Out</MenuItems>}
                        </MenuItem>
                        {/* </Link> */}
                    </MenuOption>
                    <MenuOption>
                        <Link to="/cart">
                            <Badge badgeContent={quantity} color="error">
                                <LocalMallOutlined style={{ color: "white" }}></LocalMallOutlined>
                            </Badge>
                        </Link>
                    </MenuOption>
                    {/* <MenuOption>
                        {navigation ? <Close onClick={() => setNavigation(!navigation)}></Close> : <Menu onClick={() => setNavigation(!navigation)}></Menu>}
                    </MenuOption> */}
                    {/* <MenuItem>
                        <Link to="/login" style={{ textDecoration: "none" }}>
                            <LoginButton>Log in</LoginButton>
                        </Link>
                    </MenuItem>
                    <MenuItem>More</MenuItem>
                    <Link to="/cart">
                        <MenuItem>
                            <Badge badgeContent={quantity} color="error">
                                <ShoppingCartOutlined />
                            </Badge>
                        </MenuItem>
                    </Link> */}
                </Right>
                <NavigationMenu>
                    {navigation && <Navigation />}
                </NavigationMenu>
            </Wrapper>
            {searchBar && <SearchContainer>
                <Input />
                <SearchIcon>
                    <Search style={{ color: "gray", fontSize: "28", cursor: "pointer" }} />
                </SearchIcon>
                <Close style={{ color: "gray", cursor: "pointer" }} onClick={() => setSearchBar(!searchBar)}></Close>
            </SearchContainer>}
        </Container>
    )
}

export default Navbar