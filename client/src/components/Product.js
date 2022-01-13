import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { mobile } from "../responsive"

const Icons = styled.div`
    display:flex;
    justify-content:space-evenly;
    margin: 5px 0;
    visibility: hidden;
    position: absolute;
    top: -20px;
    width: 100%;
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
    width: 80%;
`


const Info = styled.div`
    position: relative;
`

const Icon = styled.div`
    // display: flex;
    // align-items: center;
    // justify-content: center;

    // border-width: 0 0 3px 0;
    // border-style: solid;
    // border-image: linear-gradient(#FD2D00,#DF007C) 1;
    // transition: all 0.2s;
    // font-size: 2.5rem;
    // background: #191919;
    // color: white;
    // padding: 10px 20px;

    //  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;

    // &:hover{
    //     transform: scale(1.05);
    //     box-shadow: 2px 2px 2px #FD2D00;
    // }
`
const ItemDetails = styled.p`
    padding: 0 20px;

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
const ItemDesc = styled.p`
    // color:gray;
    // color: ${props => props.theme.fontColorPrimary};
`

const Product = ({ item }) => {
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <ItemDetails>{item.title.substring(0, 50)}...</ItemDetails>
                <ItemDetails>&#8377; {item.price}</ItemDetails>
                {/* <ItemDesc>{item.desc.substring(0, 100)}...</ItemDesc> */}
                <Icons>
                    <Icon>
                        <ShoppingCartOutlined style={{ fontSize: "2rem" }} />
                    </Icon>
                    <Icon>
                        <Link to={`/product/${item._id}`}>
                            <SearchOutlined style={{ color: "#FF3535", fontSize: "2rem" }} />
                        </Link>
                    </Icon>
                    <Icon>
                        <FavoriteBorderOutlined style={{ fontSize: "2rem" }} />
                    </Icon>
                </Icons>
            </Info>
        </Container>
    )
}

export default Product