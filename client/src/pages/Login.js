import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { login } from "../redux/apiCalls"
import { mobile } from "../responsive"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    ${mobile({ flexDirection: "column" })}
`

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: transparent;
    color:white;
    border: 1px solid rgba(255,53,53,0.5);
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
    flex-direction: column;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background: transparent;
    border: 1px solid #FF3535;
    color: #FF3535;
    cursor: pointer;
    margin-bottom: 10px;

    $:disabled{
        color: green;
        cursor: not-allowed;
    }
`
const FormLink = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
    color:white;
`
const Error = styled.span`
    color: red;
`

const FormLinks = styled.div`
    margin: 5px 0px;
    font-size: 12px;
    cursor: pointer;
`

const Logo = styled.h1`
    margin: 0;
    padding: 5px;
    border-bottom: 5px solid #FF3535;
    font-family: 'Ubuntu', sans-serif;
    font-size: 70px;
    letter-spacing: 2px;
    color:white;
    ${mobile({ fontSize: "40px" })}
`

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const { isFetching, error } = useSelector((state) => state.status)

    const handleClick = (e) => {
        e.preventDefault()
        login(dispatch, { username, password })
    }


    return (
        <Container>
            <Logo>ACTION<br />CORE</Logo>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input placeholder="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
                    {error && <Error>Something went wrong...</Error>}
                    <FormLink>Forgotten password?</FormLink>
                    <FormLinks>
                        <Link to="/register" style={{ color: "white" }}>Create New Account
                        </Link>
                    </FormLinks>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login