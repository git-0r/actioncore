import { Send } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../responsive"
import Banner from "../components/Banner"

const Container = styled.div`
    // height: 100vh;
    // background-color: #191919;
    background: ${props => props.theme.bgSecondary};
    color: ${props => props.theme.fontColorSecondary};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${mobile({ height: "auto" })}
    padding-bottom:50px;
`
const Title = styled.h1`
    font-size: 8rem;
    background-image: linear-gradient(135deg, rgb(214, 255, 127) 0%, rgb(0, 179, 204) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    margin: 30px;
    // font-family: 'Luckiest Guy', cursive;
    font-family: 'Inter', sans-serif;
    font-weight: 900;
    // letter-spacing:5px;
    ${mobile({ fontSize: "40px" })}
`
const Desc = styled.div`
    font-size: 2rem;
    font-weight: 300;
    margin-bottom: 60px;
    color: ${props => props.theme.fontColorPrimary};

    ${mobile({ textAlign: "center", fontSize: "18px" })}
`
const InputContainer = styled.div`
    width: 50%;
    height: 5rem;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({ width: "80%" })}
`
const Input = styled.input`
    flex: 8;
    border: none;
    padding: 20px;
    caret-color: rgb(0, 179, 204);
    outline-color: rgb(0, 179, 204);
`
const Button = styled.button`
    flex: 2;
    border: none;
    // background-color: #FF3535;
    background: linear-gradient(135deg, rgb(214, 255, 127) 0%, rgb(0, 179, 204) 100%);
    // font-size: 5rem;
    color: white;
`

const Newsletter = () => {
    return (
        <Container>
            <Banner src="https://res.cloudinary.com/clouduser/image/upload/v1639903682/ActionCore/1920x300-Offer-page-1-min-1920x300-removebg-preview_wwgq7b.png" />
            <Title>Newsletter</Title>
            <Desc>Stay up to date with news and promotions by signing up for our newsletter.</Desc>
            <InputContainer>
                <Input placeholder="Your email" />
                <Button>
                    <Send />
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter