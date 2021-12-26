import styled from "styled-components"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { DoneAll } from "@material-ui/icons"
import { useDispatch } from "react-redux"
import { clearCart } from "../redux/cartRedux"


const Container = styled.div``
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

const PaymentSuccess = () => {
    const dispatch = useDispatch()
    dispatch(clearCart())

    return (
        <Container>
            <Navbar />
            <SuccessInfo>
                <DoneAll style={{ fontSize: "70px", backgroundColor: "green", borderRadius: "50%", padding: "10px" }} />

            </SuccessInfo>
            <SuccessText>
                Payment successfull.
            </SuccessText>
            <Footer />
        </Container>
    )
}

export default PaymentSuccess