import { ArrowDropDown } from "@material-ui/icons"
import { useState } from "react"
import styled from "styled-components"
import { mobile } from "../responsive"

const Wrapper = styled.div`
    // z-index: 1;
`

const MenuOption = styled.div`
    font-size: 16px;
    letter-spacing: 1px;
    cursor:pointer;
    margin: 20px;
    // text-align: center;

    &:hover{
        color: #FF3535;
    }
`

const MenuItem = styled.ul`
    color: #191919;
    background-color: #F5F5F5;
    padding: 10px 20px;
    margin: 5px;
    text-align: center;
    border: 1px solid #FF3535;
    // display: none;
`
const MenuItems = styled.li`
    list-style: none;
    font-size: 14px;
    white-space: nowrap;
    cursor:pointer;
    margin: 10px 0;

    &:hover{
        text-decoration: underline;
    }
`
const MenuTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Title = styled.div``

const Navigation = () => {
    const [menuItem, setMenuItem] = useState("")
    return (
        <Wrapper>

            <MenuOption>
                <MenuTitle onClick={() => setMenuItem(menuItem === "products" ? "" : "products")}>
                    <Title>PRODUCTS</Title>
                    <ArrowDropDown></ArrowDropDown>
                </MenuTitle>
                {menuItem === "products" && <MenuItem>
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
                </MenuItem>}
                {/* <MenuItems>Phones</MenuItems>
                        <MenuItems>Desktops</MenuItems> */}
            </MenuOption>
            <MenuOption>
                <MenuTitle onClick={() => setMenuItem(menuItem === "innovation" ? "" : "innovation")}>
                    <Title>INNOVATION</Title>
                    <ArrowDropDown></ArrowDropDown>
                </MenuTitle>
                {menuItem === "innovation" && <MenuItem>
                    <MenuItems>Aura</MenuItems>
                    <MenuItems>Intelligent Cooling</MenuItems>
                </MenuItem>}
            </MenuOption>
            <MenuOption>
                <MenuTitle onClick={() => setMenuItem(menuItem === "download" ? "" : "download")}>
                    <Title>DOWNLOAD</Title>
                    <ArrowDropDown></ArrowDropDown>
                </MenuTitle>
                {menuItem === "download" && <MenuItem>
                    <MenuItems>Wallpaper</MenuItems>
                    <MenuItems>Aura Sync</MenuItems>
                    <MenuItems>Armoury Crate</MenuItems>
                    <MenuItems>ROG India Product Guide</MenuItems>
                </MenuItem>}
            </MenuOption>
            <MenuOption>
                <MenuTitle onClick={() => setMenuItem(menuItem === "community" ? "" : "community")}>
                    <Title>COMMUNITY</Title>
                    <ArrowDropDown></ArrowDropDown>
                </MenuTitle>
                {menuItem === "community" && <MenuItem>
                    <MenuItems>ROG Elite Program</MenuItems>
                    <MenuItems>ROG esports teams</MenuItems>
                    <MenuItems>Blogs</MenuItems>
                    <MenuItems>News and Articles</MenuItems>
                </MenuItem>}
            </MenuOption>
            <MenuOption>
                <MenuTitle onClick={() => setMenuItem(menuItem === "service" ? "" : "service")}>
                    <Title>SERVICE</Title>
                    <ArrowDropDown></ArrowDropDown>
                </MenuTitle>
                {menuItem === "service" && <MenuItem>
                    <MenuItems>Support</MenuItems>
                    <MenuItems>Find Service Location</MenuItems>
                    <MenuItems>Check Repair Status</MenuItems>
                    <MenuItems>Check Warranty status</MenuItems>
                    <MenuItems>We are now on Whatsapp!</MenuItems>
                </MenuItem>}
            </MenuOption>
            <MenuOption>
                <MenuTitle onClick={() => setMenuItem(menuItem === "offers" ? "" : "offers")}>
                    <Title>STORES & OFFERS</Title>
                    <ArrowDropDown></ArrowDropDown>
                </MenuTitle>
                {menuItem === "offers" && <MenuItem>
                    <MenuItems>Where to Buy</MenuItems>
                    <MenuItems>Laptop & Desktop Offers</MenuItems>
                </MenuItem>}
            </MenuOption>
        </Wrapper>
    )
}

export default Navigation