import styled from "styled-components"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Add, Remove } from "@material-ui/icons"
import { mobile } from "../responsive"
import { useDispatch, useSelector } from "react-redux"
import { addProductSuccess, removeProductSuccess, updateCartFromDB } from "../redux/cartRedux"
import { userRequest } from "../requestMethods"
import { handleAddProduct, handleRemoveProduct } from "../cartMiddleware"
import { getCartFromDb, saveCartToDB } from "../redux/apiCalls"
import { useEffect } from "react"
import { useState } from "react"
import Notification from "../components/Notification"
import Loader from "../components/Loader"
import { operationComplete, operationStart } from "../redux/statusRedux"

const Container = styled.div`
    background-color: ${props => props.theme.bgSecondary};
    color: ${props => props.theme.fontColorPrimary};
`

const Wrapper = styled.div`
    font-size: 1.4rem;
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
    font-size: 2.5rem;
    margin: 5px;
    ${mobile({ margin: "5px 15px" })}
`

const ProductPrice = styled.div`
    font-size: 3rem;
    font-weight: 200;
    ${mobile({ marginBottom: "20px" })}
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
    font-size: ${props => props.type === "total" && "2.5rem"};
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
    const user = useSelector(state => state.user.currentUser)
    const cart = useSelector(state => state.cart)
    const userId = user?._id
    const dispatch = useDispatch()
    const [notification, setNotification] = useState(null)
    const { isFetching } = useSelector(state => state.status)

    const handleQuantity = async (operation, product) => {
        try {
            if (operation === "add") {
                dispatch(operationStart())

                const updatedCart = await handleAddProduct({ ...product, quantity: 1 }, userId)
                if (user) {
                    await saveCartToDB(user._id, updatedCart)
                    dispatch(
                        addProductSuccess(updatedCart)
                    )
                } else {
                    dispatch(
                        addProductSuccess(updatedCart)
                    )
                }
                dispatch(operationComplete())
            } else if (operation === "remove") {

                dispatch(operationStart())
                const updatedCart = await handleRemoveProduct({ ...product, quantity: 1 }, userId)
                if (user) {
                    await saveCartToDB(user._id, updatedCart)
                    dispatch(
                        removeProductSuccess(updatedCart)
                    )
                } else {
                    dispatch(
                        removeProductSuccess(updatedCart)
                    )
                }
                dispatch(operationComplete())
            }
            setNotification(<Notification reason="success" message="cart updated" />)
            setTimeout(() => {
                setNotification(null)
            }, 1000)
        } catch (error) {
            dispatch(operationComplete())
            setNotification(<Notification reason="failure" message="Error !" />)
            setTimeout(() => {
                setNotification(null)
            }, 1000)
        }

    }

    useEffect(() => {
        try {
            if (user) {
                async function refreshCart() {
                    dispatch(operationStart())
                    const cart = await getCartFromDb(userId)
                    dispatch(updateCartFromDB(cart))
                    dispatch(operationComplete())
                }
                refreshCart()
            }
        } catch (error) {
            dispatch(operationComplete())
            setNotification(<Notification reason="failure" message="Error !" />)
            setTimeout(() => {
                setNotification(null)
            }, 1000)
        }

    }, [])

    const sendPaymentRequest = async () => {
        // const checkoutUrl = await axios.post("http://localhost:3001/api/checkout/payment", { ...cart, userId })
        const checkoutUrl = await userRequest.post("checkout/payment", { ...cart, userId })

        window.location.href = checkoutUrl.data
    }

    return (
        <Container>
            {notification}
            {isFetching && <Loader />}
            <Navbar />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopTexts>
                        <TopText>Shopping Bag({cart?.products?.length})</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </TopTexts>
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