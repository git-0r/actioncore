import styled from "styled-components"
import { mobile } from "../responsive"
import { Link } from "react-router-dom"

const Container = styled.div`
   margin: 3px;
   width: 200px;
   border: 1px solid #FF353535;
   border-radius: 5px;
   ${mobile({ width: "100px", height: "auto" })}
   &:hover{
    box-shadow: 0px 0px 5px #FF3535;
   }
   transition: all 0.5s ease-out;
   &:hover > p{
    text-decoration: underline;
   }
`
const Image = styled.img`
    width: 100%;
    display:block;
    transition: all 0.3s ease-out;

    &:hover{
        transform: scale(1.3)
    }
`
const Title = styled.p`
    text-align:center;
    color: #FF3535;
    cursor:pointer;
    word-wrap:break-word;
    ${mobile({ fontSize: "12px" })}
`


const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Link to={`/products/${item.cat}`}>
                <Image src={item.img} />
            </Link>
            <Title>{item.title}</Title>
        </Container>
    )
}

export default CategoryItem