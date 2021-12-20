import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    height: 50px;
    color: #00AD7C;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    font-weight: 400;
    font-family: 'Fredericka the Great', cursive;
    border-bottom: 1px solid rgba(0,173,124, 0.2);
    ${mobile({ fontSize: "20px" })}

`

const Announcement = () => {
    return (
        <Container>
            Get free shipping only for today !
        </Container>
    )
}

export default Announcement