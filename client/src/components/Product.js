import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { mobile } from "../responsive"
import { addToCart } from "../cartMiddleware"

const Icons = styled.div`
    display:flex;
    justify-content:space-evenly;
    margin: 5px 0;
    visibility: hidden;
    position: absolute;
    top: 5px;
    right: 5px;

    ${mobile({
    visibility: "visible"
})}
`


const Container = styled.div`
    width: 20%;
    max-width: 300px;
    margin: 30px 10px;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px, rgba(255,0,0,0.1) 2px 2px 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    font-size: 1.5rem;
    position: relative;

   &:hover ${Icons}{
       visibility : visible;
   }

   ${mobile({
    width: "50%",
    flex: "none",
    fontSize: "1.2rem"
})}
`

const Image = styled.img`
    margin: 0 auto;
    display:block;
    width: 80%;
`


const Info = styled.div`
        margin: 0 auto;
`

const Icon = styled.div`
    height: 30px;
    width: 30px;
    display:flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #FF4545;
    background: white;
    border-radius: 50%;
   
    &:hover{
        transform: scale(1.1);
    }
`
const ItemDetails = styled.p`
    padding: 0 20px;
    color: ${props => props.theme.fontColorPrimary};

    &:last-of-type{
        text-decoration: underline rgba(255,0,0,0.5);
        font-weight: 500;
        font-size: 2rem;
        ${mobile({ fontSize: "1.2rem" })}

    }
    ${mobile({
    padding: "0 10px",

})}
`

const Product = ({ item }) => {

    return (
        <Container>
            <Link to={`/product/${item._id}`} style={{ textDecoration: "none" }}>
                <Image src={item.img} />
                <Info>
                    <ItemDetails>{item.title.substring(0, 50)}...</ItemDetails>
                    <ItemDetails>&#8377; {item.price}</ItemDetails>
                    {/* <ItemDesc>{item.desc.substring(0, 100)}...</ItemDesc> */}
                    <Icons>
                        {/* <Icon >
                            <ShoppingCartOutlined style={{ fontSize: "2rem" }} />
                        </Icon> */}
                        {/* <Icon> */}
                        {/* <Link to={`/product/${item._id}`}> */}
                        {/* <SearchOutlined style={{ color: "#FF3535", fontSize: "2rem" }} /> */}
                        {/* </Link> */}
                        {/* </Icon> */}
                        <Icon>
                            <FavoriteBorderOutlined style={{ fontSize: "2rem" }} />
                        </Icon>
                    </Icons>
                </Info>
            </Link>

        </Container>
    )
}

export default Product