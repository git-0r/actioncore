import styled from "styled-components"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { Add, Remove } from "@material-ui/icons"
import { mobile } from "../responsive"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { publicRequest } from "../requestMethods"
import { addProductFailure, addProductStart, addProductSuccess, updateCartFromDB } from "../redux/cartRedux"
import { useDispatch, useSelector } from "react-redux"
import { getCartFromDb, saveCartToDB } from "../redux/apiCalls"
import { handleAddProduct } from "../cartMiddleware"
import Loader from "../components/Loader"

const Container = styled.div``

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    background:#202020;
    ${mobile({ padding: "10px", flexDirection: "column" })}
`

const ImgContainer = styled.div`
    flex: 1;
    ${mobile({ borderWidth: "3px" })}
`

const Image = styled.img`
    width: 100%;
    height: 70vh;
    object-fit: contain;
    ${mobile({ height: "40vh" })}
`

const InfoContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0 30px;

    ${mobile({ padding: "10px" })}
`

const Title = styled.p`
    font-size: 1.4rem;
    font-weight: 200;
`

const Desc = styled.p`
    margin: 20px 0px;
    font-size: 0.9rem;
    color: rgba(255,255,255,0.9);
`

const Price = styled.span`
    font-weight: 100;
    font-size: 1.3rem;
    text-decoration: underline #FD2D00;
`
const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({ width: "100%" })}
`

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 0.9rem;
    font-weight: 200;
`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`

const AddContainer = styled.div`
    width: 100%;
    display:flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width: "100%" })}
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    cursor:pointer;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`

const Button = styled.button`
    padding: 15px;
    background-color: #1E1C1C;
    cursor: pointer;
    font-weight: 500;
    color: white;
    border-width: 2px;
    border-style: solid;
    border-image: linear-gradient(#FD2D00,#DF007C) 1;
    transition: all 0.2s;

    &:hover{
        transform: scale(1.05);
        box-shadow: 2px 2px 2px #FD2D00;
    }
`

const Product = () => {

    const location = useLocation()
    const id = location.pathname.split("/")[2]
    const [product, setProduct] = useState()
    const [quantity, setQuantity] = useState(1)
    // const cart = useSelector(state => state.cart)
    const user = useSelector(state => state.user.currentUser)
    const { isFetching } = useSelector(state => state.status)
    const dispatch = useDispatch()

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get("/products/find/" + id);
                setProduct(res.data)
            } catch { }
        }
        getProduct()
    }, [id])

    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1)
        } else {
            setQuantity(quantity + 1)
        }
    }
    const handleClick = async () => {

        // handleAddProduct from cartMiddleware
        const updatedCart = await handleAddProduct({ ...product, quantity }, user?._id)
        if (user) {
            try {
                await saveCartToDB(user._id, updatedCart)
                dispatch(
                    addProductSuccess(updatedCart)
                )
            } catch (error) {
                // dispatch(addProductFailure())
            }
        } else {
            dispatch(
                addProductSuccess(updatedCart)
            )
        }
    }

    return (
        <Container>
            {isFetching && <Loader />}
            <Navbar />
            {/* <Announcement /> */}
            <Wrapper>
                <ImgContainer>
                    <Image src={product?.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{product?.title.slice(0, 99)}...</Title>
                    <Desc>{product?.desc}</Desc>
                    <Price>&#8377; {product?.price}</Price>
                    <FilterContainer>
                        {/* <Filter>
                            <FilterTitle>Color</FilterTitle>
                            {product?.color.map((c) => <FilterColor color={c} key={c} onClick={() => setColor(c)} />
                            )}
                        </Filter> */}
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            {product?.color.map((c) => <FilterColor color={c} key={c} />)}
                        </Filter>
                        {product?.size.length > 0 && <Filter>
                            <FilterTitle>Size</FilterTitle>
                            {/* <FilterSize onChange={(e) => setSize(e.target.value)}>
                                {product?.size.map((s) => <FilterSizeOption key={s}>{s}</FilterSizeOption>
                                )}
                            </FilterSize> */}
                        </Filter>}
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer >
                            <Remove onClick={() => handleQuantity("dec")} />
                            <Amount>{quantity}</Amount>
                            <Add onClick={() => handleQuantity("inc")} />
                        </AmountContainer>
                        <Button onClick={handleClick}>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product