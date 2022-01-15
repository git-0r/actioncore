import { CheckCircleOutlined, ErrorOutlined } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
    position: fixed;
    top: 80vh;
    left: calc(50vw - 75px);
    background:${props => props.bg};
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px;
    width: 150px;
    font-size: 1.6rem;
`
const Text = styled.span`
    margin: 0 5px;
`

const Notification = ({ reason, message }) => {

    return (
        <Container bg={reason === "success" ? "#4CAF50" : "red"} >
            {reason === "success" ? <CheckCircleOutlined /> : <ErrorOutlined />}
            <Text>
                {message}
            </Text>
        </Container>
    )
}

export default Notification