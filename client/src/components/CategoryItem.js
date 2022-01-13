import styled from "styled-components"
import { mobile } from "../responsive"
import { Link } from "react-router-dom"
import { SportsEsports } from "@material-ui/icons"

const Container = styled.div`
    display: flex;
    margin: 30px;
    justify-content: space-evenly;
    align-items: center;
    box-sizing: border-box;
    transition: all 0.5s ease-out;
    font-size: 1.6rem;

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

   ${mobile({ width: "100vw", margin: "20px 0", flexDirection: "column" })}
`
const Image = styled.img`
    width: 20vw;
    max-width: 400px;
    display:block;
    transition: all 0.3s ease-out;
    // box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    // box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;


    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    border-width: 6px;
    border-style: solid;
    border-image: linear-gradient(#FD2D00,#DF007C) 1;

    &:hover{
        transform: scale(1.05);
        box-shadow: 3px 3px 3px #FD2D00;
    }

    ${mobile({ width: "70vw" })}
`
// const Title = styled.p`
//     text-align:center;
//     color: #FF3535;
//     cursor:pointer;
//     word-wrap:break-word;



//     ${mobile({ fontSize: "12px" })}

// `
const Desc = styled.p`
    width: 40vw;
    // font-size: 1.2rem;
    

    &::selection{
        background: #FF3535;
    }

    ${mobile({ width: "85%", order: "0 !important", margin: "50px 0" })}
`
const Button = styled.button`
    display:block;
    margin-top: 50px;
    border-width: 3px;
    border-style: solid;
    border-image: linear-gradient(#FD2D00,#DF007C) 1;
    transition: all 0.2s;
    font-size: 1.5rem;
    background: #191919;
    color: white;
    padding: 10px 20px;
    margin-left: auto;

    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;

    &:hover{
        transform: scale(1.05);
        box-shadow: 2px 2px 2px #FD2D00;
    }

    ${mobile({ marginTop: "10px" })}

`

const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Link to={`/products/${item.cat}`}>
                <Image src={item.img} />
            </Link>
            {/* <Title>{item.title}</Title> */}
            <Desc>

                {item.desc}

                <Button>
                    View all
                </Button>

            </Desc>
        </Container>
    )
}

export default CategoryItem