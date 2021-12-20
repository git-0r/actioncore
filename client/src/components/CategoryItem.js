import styled from "styled-components"
import { mobile } from "../responsive"
import { Link } from "react-router-dom"

const Container = styled.div`
//    flex: 1;
   margin: 3px;
   width: 200px;
//    position: relative;
    border: 1px solid #FF353535;
    border-radius: 5px;
    ${mobile({ width: "100px", height: "auto" })}
    &:hover{
        box-shadow: 0px 0px 5px #FF3535;
    }
    // animation: all 0.5s;
    transition: all 0.5s ease-out;
    &:hover > p{
        text-decoration: underline;
    }
    // &:hover > img{
    //     transform: scale(1.3);
    // }

`
const Image = styled.img`
    width: 100%;
    // height: 100%;
    // object-fit: cover;
    display:block;
    transition: all 0.3s ease-out;

    &:hover{
        transform: scale(1.3)
    }
`
const Info = styled.div`
    // position: absolute;
    // top: 0;
    // left: 0;
    // width 100%;
    // height: 100%;
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;
`
const Title = styled.p`
    // margin-bottom: 20px;
    // background-color: rgba(255,255,255, 15%);
    text-align:center;
    color: #FF3535;
    // background: white;
    // margin: 5px;
    // padding:3px 0;
    // border-radius: 5px;
    cursor:pointer;
    word-wrap:break-word;
    ${mobile({ fontSize: "12px" })}
    `
const Button = styled.button`
    // border: none;
    // padding: 10px;
    // background-color: white;
    // cursor: pointer;
    // font-weight: 600;
    // border: 1px solid black;
`


const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Link to={`/products/${item.cat}`}>
                <Image src={item.img} />
                {/* <Info>
                    <Title>{item.title}</Title>
                    <Button>SHOP NOW</Button>
                </Info> */}
            </Link>
            <Title>{item.title}</Title>
        </Container>
    )
}

export default CategoryItem