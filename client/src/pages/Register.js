import { useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { mobile } from "../responsive"
import { register } from "../redux/apiCalls"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: #202020;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    ${mobile({ flexDirection: "column" })}
`

const Wrapper = styled.div`
    width: 40%;
    padding: 10px 20px;
    background-color: transparent;
    border: 1px solid #FF3535;
    border-radius: 5px;
    ${mobile({ width: "75%" })}

`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    color: #FF3535;
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: transparent;
    border: 1px solid #FF3535;
    color: #FF3535;
    cursor: pointer;
`
const Buttons = styled.div`
    display: flex;
    justify-content: space-evenly;
    width:100%;
`

const Register = () => {

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    console.log(name, lastName, username, email, password, confirmPassword)
    const dispatch = useDispatch()

    const handleRegistration = async (e) => {
        e.preventDefault()
        register(dispatch, { name, lastName, username, email, password, })
    }

    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form onSubmit={handleRegistration}>
                    <Input required onChange={(e) => setName(e.target.value)} placeholder="name" />
                    <Input required onChange={(e) => setLastName(e.target.value)} placeholder="last name" />
                    <Input required onChange={(e) => setUsername(e.target.value)} placeholder="username" />
                    <Input required type="email" onChange={(e) => setEmail(e.target.value)} placeholder="email" />
                    <Input required type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password" />
                    <Input required type="password" onChange={(e) => setConfirmPassword(e.target.value)} placeholder="confirm password" />
                    <Agreement>
                        By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Buttons>
                        <Button>CANCEL</Button>
                        <Button>CREATE</Button>
                    </Buttons>

                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register