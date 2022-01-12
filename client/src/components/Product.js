import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { mobile, mobileSm } from "../responsive"

const Icons = styled.div`
    display:flex;
    justify-content:space-between;
    height:100%;
    order: 0 !important;
    visibility: hidden;

    &:hover{
        visibility: visible;
    }
    ${mobile({ visibility: "visible" })}
`


const Container = styled.div`
    width: 100%;
    margin: 30px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 5px;
    position:relative;
    transition: all 0.2s ease;

    &:nth-of-type(odd){
    border-width: 0 2px 0 0;
    border-style: solid;
    border-image: linear-gradient(#FD2D00,#DF007C) 1;
   }

   &:nth-of-type(even){
    border-width: 0 0 0 2px;
    border-style: solid;
    border-image: linear-gradient(#FD2D00,#DF007C) 1;
   }

   &:hover ${Icons}{
       visibility : visible;
   }
    ${mobile({ width: "100vw", margin: "40px 0" })}
   ${mobileSm({ flexDirection: "column" })}
`

const Image = styled.img`
    width: 12rem;
    max-width: 400px;
    display:block;
    transition: all 0.3s ease-out;

    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    border-width: 6px;
    border-style: solid;
    border-image: linear-gradient(#FD2D00,#DF007C) 1;

    &:hover{
        transform: scale(1.05);
        box-shadow: 3px 3px 3px #FD2D00;
    }

    ${mobileSm({ width: "70vw", marginBottom: "10px" })}

`


const Info = styled.div`
    width: 40vw;
    display: flex;
    flex-direction: column;
    
     &::selection{
        background: #FF3535;
    }

    ${mobile({ width: "90%", order: "0 !important" })}
`

const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    border-width: 0 0 3px 0;
    border-style: solid;
    border-image: linear-gradient(#FD2D00,#DF007C) 1;
    transition: all 0.2s;
    font-size: 1.2rem;
    background: #191919;
    color: white;
    padding: 10px 20px;

     box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;

    &:hover{
        transform: scale(1.05);
        box-shadow: 2px 2px 2px #FD2D00;
    }
`
const ItemDetails = styled.p`
`
const ItemDesc = styled.p`
    color:gray;
    // color: ${props => props.theme.fontColorPrimary};
`

const Product = ({ item }) => {
    return (
        <Container>
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