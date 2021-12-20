import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { mobile } from "../responsive"


const Info = styled.div`
    width: 20vw;
    // height: 100%;
    // position: absolute;
    // top: 0;
    // bottom: 0;
    // background-color: rgba(0,0,0,0.2);
    // z-index: 3;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    // transition: all 0.5s ease;
    // cursor: pointer;
    ${mobile({ width: "100%" })}
`
const Icons = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    height:100%;
    position:absolute;
    top:0;
    right:0;
    display:none;
`

const Container = styled.div`
    width: 30vw;
    display: flex;
    border: 1px solid #FF3535;
    border-radius: 5px;
    margin-bottom: 10px;
    position:relative;

    &:hover ${Icons}{
        display: flex;
    }
    ${mobile({ flexWrap: "wrap", width: "80vw", justifyContent: "center", padding: "10px" })}
`

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    ${mobile({ width: "250px", height: "250px" })}
`
const Image = styled.img`
    height: 100px;
    width: 100px;
    // object-fit: contain;
    // z-index: 2;
    align-self:center;
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    color:#FF3535;

    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1)
    }
`
const ItemDetails = styled.p`
    // word-break: break-all;
`
const ItemDesc = styled.p`
    color:gray;
`


const Product = ({ item }) => {
    return (
        <Container>
            {/* <Circle /> */}
            <Image src={item.img} />
            <Info>
                <ItemDetails>{item.title.substring(0, 50)}...</ItemDetails>
                <ItemDetails>&#8377; {item.price}</ItemDetails>
                <ItemDesc>{item.desc.substring(0, 100)}...</ItemDesc>
                <Icons>
                    <Icon>
                        <ShoppingCartOutlined />
                    </Icon>
                    <Icon>
                        <Link to={`/product/${item._id}`}>
                            <SearchOutlined style={{ color: "#FF3535" }} />
                        </Link>
                    </Icon>
                    <Icon>
                        <FavoriteBorderOutlined />
                    </Icon>
                </Icons>
            </Info>
        </Container>
    )
}

export default Product