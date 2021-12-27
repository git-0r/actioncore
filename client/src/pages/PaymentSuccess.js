import styled from "styled-components"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { DoneAll } from "@material-ui/icons"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { clearCart } from "../redux/cartRedux"


const Container = styled.div``
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px;

`
const SuccessInfo = styled.div`
    display:flex;
    alignItems:center;
    justify-content: center;
    margin:20px;
`
const SuccessText = styled.p`
    text-align:center;
    font-size:30px;
`
const Button = styled.button`
    padding: 20px 40px;
    background: transparent;
    border: 1px solid #FF3535;
    color: white;
    margin: 0 auto;
    display:block;
    cursor: pointer;
    font-size: 20px;
`

const PaymentSuccess = () => {
    const dispatch = useDispatch()
    dispatch(clearCart())

    return (
        <Container>
            <Navbar />
            <Wrapper>
                <SuccessInfo>
                    <DoneAll style={{ fontSize: "70px", backgroundColor: "green", borderRadius: "50%", padding: "10px" }} />
                </SuccessInfo>
                <SuccessText>
                    Payment successfull.
                </SuccessText>
                <Link to="/orders" style={{ textDecoration: "none" }}>
                    <Button>View Orders</Button>
                </Link>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default PaymentSuccess