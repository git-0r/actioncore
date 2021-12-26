import styled from "styled-components"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Cancel } from "@material-ui/icons"


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

const PaymentFail = () => {

    return (
        <Container>
            <Navbar />
            <SuccessInfo>
                <Cancel style={{ fontSize: "70px", backgroundColor: "#FF3535", borderRadius: "50%", padding: "10px" }} />

            </SuccessInfo>
            <SuccessText>
                Payment failed.
            </SuccessText>
            <Footer />
        </Container>
    )
}

export default PaymentFail