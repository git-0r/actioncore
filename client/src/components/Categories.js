import styled from "styled-components"
import { categories } from "../data"
import { mobile } from "../responsive"
import CategoryItem from "./CategoryItem"
import Banner from "../components/Banner"

const Container = styled.div`
    background-color: ${props => props.theme.bgSecondary};
    color: ${props => props.theme.fontColorSecondary};
    padding: 20px;

    ${mobile({ padding: "0" })}
`
const Title = styled.p`
    text-align:center;
    font-family: 'Inter', sans-serif;
    font-size: 8rem;
    font-weight: 900;
    background-image: linear-gradient(135deg, #DF007C 0%, #FD2D00 100%) ;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;

    ${mobile({ fontSize: "3rem", margin: "0", padding: "50px 0" })}
`
const Products = styled.div`
    display:flex;
    flex-direction: column;

    & div:nth-of-type(2n) p{
        order: -1;
    }


`

const Categories = () => {
    return (
        <Container>
            <Title>Explore our products </Title>
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