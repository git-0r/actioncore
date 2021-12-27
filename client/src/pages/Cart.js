import styled from "styled-components"
import Navbar from "../components/Navbar"
// import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import { Add, Remove } from "@material-ui/icons"
import { mobile } from "../responsive"
import { useDispatch, useSelector } from "react-redux"
import { addProduct, removeProduct } from "../redux/cartRedux"
import { userRequest } from "../requestMethods"

const Container = styled.div``

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px" })}
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    color:white;
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};

`
const TopTexts = styled.div`
    ${mobile({ display: "none" })}
`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`
const Info = styled.div`
    flex: 3;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom:50px;
    ${mobile({ flexDirection: "column", alignItmes: "center" })}
`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`

const Image = styled.img`
    width: 200px;
    ${mobile({ width: "100px", height: "100px" })}
`

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    ${mobile({ padding: "5px" })}
`

const ProductName = styled.span``

const ProductId = styled.span`
    font-size: 12px;
    color:gray;
`

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color}
`

const ProductSize = styled.span``

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${mobile({ flexDirection: "row", justifyContent: "space-between" })}
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px" })}
`

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px" })}
`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`
const SummaryTitle = styled.h1`
    font-weight: 200;
`

const SummaryItem = styled.div`
    margin: 25px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    cursor:pointer;
`

const Cart = () => {
    const cart = useSelector(state => state.cart)
    const userId = useSelector(state => state.user.currentUser._id)
    const dispatch = useDispatch()

    const handleQuantity = (operation, product) => {
        if (operation === "add") {
            dispatch(
                addProduct({ ...product, quantity: 1 })
            )
        } else if (operation === "remove") {
            dispatch(
                removeProduct({ ...product, quantity: 1 })
            )
        }
    }

    const sendPaymentRequest = async () => {
        // const checkoutUrl = await axios.post("http://localhost:3001/api/checkout/payment", { ...cart, userId })
        console.log("sending payment request...")
        const checkoutUrl = await userRequest.post("checkout/payment", { ...cart, userId })
        console.log(checkoutUrl.data)

        window.location.href = checkoutUrl.data
    }

    return (
        <Container>
            <Navbar />
            {/* <Announcement /> */}
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag({cart?.products?.length})</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {cart?.products?.map(product => (
                            <Product key={product._id}>
                                <ProductDetail>
                                    <Image src={product.img} />
                                    <Details>
                                        <ProductName><b>Product: </b>{product?.title?.substring(0, 50)}</ProductName>
                                        <ProductId><b>ID: </b>{product._id}</ProductId>
                                        {product.color.length > 0 && <ProductColor color={product.color} />}
                                        {product.size.length > 0 && <ProductSize><b>Size:</b> {product.size}</ProductSize>}
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                        <Add onClick={() => handleQuantity("add", product)} />
                                        <ProductAmount>{product.quantity}</ProductAmount>
                                        <Remove onClick={() => handleQuantity("remove", product)} />
                                    </ProductAmountContainer>
                                    <ProductPrice>&#8377; {product.price * product.quantity}</ProductPrice>
                                </PriceDetail>
                            </Product>
                        ))}

                        {/* <Hr /> */}
                        {/* <Product>
                            <ProductDetail>
                                <Image src="https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                                <Details>
                                    <ProductName><b>Product: </b>Super T-Shirt</ProductName>
                                    <ProductId><b>ID: </b>654545</ProductId>
                                    <ProductColor color="lightgreen" />
                                    <ProductSize><b>Size:</b> M</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>1</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>$ 50</ProductPrice>
                            </PriceDetail>
                        </Product> */}
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>&#8377; {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>&#8377; {cart.products.length > 0 ? 5.90.toFixed(2) : 0}</SummaryItemPrice>
                        </SummaryItem><SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>&#8377; -{cart.products.length > 0 ? 5.90.toFixed(2) : 0}</SummaryItemPrice>
                        </SummaryItem><SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>&#8377; {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <Button disabled={cart.products.length > 0 ? false : true} onClick={sendPaymentRequest}>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart