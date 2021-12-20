import styled from "styled-components"
import { categories } from "../data"
import { mobile } from "../responsive"
import CategoryItem from "./CategoryItem"
import Banner from "../components/Banner"

const Container = styled.div`
    background-color: #202020;
    // display: flex;
    // flex-direction: column;
    padding: 20px;
    // justify-content: space-between;
`
const Title = styled.p`
    // justify-self:center;
    text-align:center;
    font-family: "Luckiest Guy", cursive;
    letter-spacing: 5px;
    // margin: 50px auto;
    font-size:70px;
    ${mobile({ fontSize: "40px" })}
`
const Products = styled.div`
    display:flex;
    justify-content:space-evenly;
    flex-wrap:wrap;
`

const Categories = () => {
    return (
        <Container>
            <Title>EXPLORE OUR PRODUCTS</Title>
            <Products>
                {categories.map(item => (
                    <CategoryItem item={item} key={item.id} />
                ))}
            </Products>
            {/* <Banner src=""/> */}
            <Banner src="https://res.cloudinary.com/clouduser/image/upload/v1639842937/ActionCore/1200x200-Asus-Z690D-min-1200x200_hfa55x.jpg" />
            <Banner src="https://res.cloudinary.com/clouduser/image/upload/v1639843315/ActionCore/1200x200-CMP-510-min-1200x200_jrbjrx.jpg" />
        </Container>
    )
}

export default Categories