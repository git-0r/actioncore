import { ArrowRight, EmailOutlined, Facebook, Instagram, Phone, Reddit, Room, Twitter, YouTube } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../responsive"


const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
`
const Copyright = styled.p`
    background-color: #202020;
    margin-bottom: 0;
    text-align:center;
    padding: 20px
`

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 20px;
`

const Desc = styled.p`
    margin: 20px 10px 30px 10px;
`

const SocialContainer = styled.div`
    display: flex;
    align-self: center;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "" })}
`
const Title = styled.h3`
    margin-bottom: 30px;
    padding-bottom:5px;
    color: #FF3535;
    letter-spacing:5px;
    border-bottom: 1px solid #FF3535;
    font-family: 'Luckiest Guy', cursive;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    display:flex;
    align-items:center;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgrounColor: "#fff8f8" })}
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
width: 50%
`

const Footer = () => {
    return (
        <Wrapper>
            <Container>
                <Left>
                    <Title>Action Core</Title>
                    <Desc>Action Core is dedicated to 100% customer delight ensuring that everything from placing your order to delivering it right to your doorstep is smooth and hassle-free. Follow us on</Desc>
                    <SocialContainer>
                        <SocialIcon color="3B5999">
                            <Facebook />
                        </SocialIcon>
                        <SocialIcon color="BC2A8D">
                            <Instagram />
                        </SocialIcon>
                        <SocialIcon color="55ACEE">
                            <Twitter />
                        </SocialIcon>
                        <SocialIcon color="FF0000">
                            <YouTube />
                        </SocialIcon>
                        <SocialIcon color="FF4500">
                            <Reddit />
                        </SocialIcon>
                    </SocialContainer>
                </Left>
                <Center>
                    <Title>Useful Links</Title>
                    <List>
                        <ListItem><ArrowRight /> About Us</ListItem>
                        <ListItem><ArrowRight /> FAQ</ListItem>
                        <ListItem><ArrowRight /> Affiliates</ListItem>
                        <ListItem><ArrowRight /> Brands</ListItem>
                        <ListItem><ArrowRight /> Privacy Policy</ListItem>
                        <ListItem><ArrowRight /> My Account</ListItem>
                        <ListItem><ArrowRight /> Order History</ListItem>
                        <ListItem><ArrowRight /> Wishlist</ListItem>
                        <ListItem><ArrowRight /> Terms & Conditions</ListItem>
                        <ListItem><ArrowRight /> Refund Policy</ListItem>
                    </List>
                </Center>
                <Right>
                    <Title>Contact Us</Title>
                    <ContactItem><Room style={{ marginRight: "10px" }} /> 65-a, Khan Market, New Delhi-110003</ContactItem>
                    <ContactItem><Phone style={{ marginRight: "10px" }} /> +91 0123 4567 89</ContactItem>
                    <ContactItem><EmailOutlined style={{ marginRight: "10px" }} /> contact@actioncore.com</ContactItem>
                    <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
                </Right>

            </Container>
            <Copyright>Copyright &copy; 2022, Action Core Pvt. Ltd. All Rights Reserved.</Copyright>
        </Wrapper>
    )
}

export default Footer