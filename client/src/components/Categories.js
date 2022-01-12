import styled from "styled-components"
import { categories } from "../data"
import { mobile } from "../responsive"
import CategoryItem from "./CategoryItem"
import Banner from "../components/Banner"

const Container = styled.div`
    // background-color: #202020;
    background-color: ${props => props.theme.bgPrimary};
    color: ${props => props.theme.fontColorSecondary};
    padding: 20px;

    ${mobile({ padding: "0" })}
`
const Title = styled.p`
    text-align:center;
    font-family: "Luckiest Guy", cursive;
    letter-spacing: 5px;
    font-size: 4rem;
    // #FD2D00,#DF007C
    background-image: linear-gradient(135deg, #DF007C 0%, #FD2D00 100%) ;
    // background-image: linear-gradient(135deg, #6699FF 0%, #FF3366 100%) ;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;

    ${mobile({ fontSize: "2rem", margin: "0", padding: "50px 0" })}
`
const Products = styled.div`
    display:flex;
    flex-direction: column;
    // justify-content:space-evenly;
    // flex-wrap:wrap;

    & div:nth-of-type(2n) p{
        order: -1;
    }


`

const Categories = () => {
    return (
        <Container>
            <Title>EXPLORE OUR PRODUCTS </Title>
            <Products>
                {categories
                    .slice(0, 3)
                    .map(item => (
                        <CategoryItem item={item} key={item.id} />
                    ))}
            </Products>
            {/* <Banner src="https://res.cloudinary.com/clouduser/image/upload/v1639842937/ActionCore/1200x200-Asus-Z690D-min-1200x200_hfa55x.jpg" />
            <Banner src="https://res.cloudinary.com/clouduser/image/upload/v1639843315/ActionCore/1200x200-CMP-510-min-1200x200_jrbjrx.jpg" /> */}
        </Container>
    )
}

export default Categories