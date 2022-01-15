import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import styled from "styled-components"
import { useEffect, useState } from "react"
import { userRequest } from "../requestMethods"
import { useSelector } from "react-redux"
import { mobile } from "../responsive"


const Container = styled.div`
    font-size: 1.5rem;

`
const Wrapper = styled.div`
    padding:50px;
    ${mobile({ padding: "20px" })}
`

const Title = styled.h1`
`
const OrderInfo = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-evenly;
    height: 20vh;
    border-bottom: 1px solid rgba(220,220,220,0.1);
    ${mobile({ flexDirection: "column", height: "auto" })}
`
const ProductImage = styled.img`
    width: 100px;
    margin: 0 20px;
`
const ProductTitle = styled.p`
    flex:2;
`

const AmountDetails = styled.div`
    display:flex;
    flex:1;
    justify-content: space-between;
    ${mobile({ justifyContent: "space-between", width: "90%" })}
`

const ProductCost = styled.p``

const ProductQuantity = styled.p``
const Orders = () => {
    const id = useSelector(state => state.user.currentUser?._id)
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function getOrdersFromDB() {
            const orders = await userRequest.get(`/orders/find/${id}`, {
                headers: {
                    token: `Bearer ${localStorage.getItem("token")}`
                }
            })
            setProducts(orders.data.map(order => order.products).flat())
        }

        getOrdersFromDB()
    }, [id])



    return (
        <Container>
            <Navbar />
            <Wrapper>
                <Title>Orders</Title>
                {products?.map(product => (
                    <OrderInfo key={Math.random()}>
                        <ProductImage src={product.img} />
                        <ProductTitle>{product.title.substring(0, 50)}...</ProductTitle>
                        <AmountDetails>
                            <ProductQuantity>Quantity: {product.quantity}</ProductQuantity>
                            <ProductCost>&#8377; {product.quantity * product.price}</ProductCost>
                        </AmountDetails>
                    </OrderInfo>
                ))}
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Orders