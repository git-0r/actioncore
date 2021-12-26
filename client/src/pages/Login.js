// import axios from "axios"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { login } from "../redux/apiCalls"
// import { userRequest } from "../requestMethods"
import { mobile } from "../responsive"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    // background: url("https://i.ibb.co/8jcm5X4/black-friday-elements-assortment-23-2149074076.jpg") no-repeat;
    // background: url(https://res.cloudinary.com/clouduser/image/upload/v1639998702/ActionCore/4571248_lh07lt.jpg) no-repeat;
    background-size: cover;
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
    // background-color: teal;
    // background-color: #FF3535;
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

const Text = styled.p`
    // background-image: linear-gradient(135deg, #6699FF 0%, #FF3366 100%) ;
    background-image: linear-gradient(60deg, #E21143, #FFB03A);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-size: 350%;
    font-weight: 900;
    width:50vw;
    box-shadow: -5px -5px rgba(255,53,53,0.4),
                -10px -10px rgba(255,53,53,0.3),
                -15px -15px rgba(255,53,53,0.2),
                -20px -20px rgba(255,53,53,0.1),
                -25px -25px rgba(255,53,53,0.05);
    text-align:center;
    border-right: 1px solid rgba(255,53,53,0.5);
    border-bottom: 1px solid rgba(255,53,53,0.5);
    border-radius: 5px;
    ${mobile({ width: "90vw", fontSize: "150%" })}
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
    const { isFetching, error } = useSelector((state) => state.user)

    const handleClick = (e) => {
        e.preventDefault()
        login(dispatch, { username, password })
    }


    return (
        <Container>
            <Logo>ACTION<br />CORE</Logo>
            {/* <Text>Play Has No Age</Text> */}
            {/* <Text>Play Has No Age <br />Play Has No Limits</Text> */}
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
                            {/* <FormLink>Create New Account</FormLink> */}
                        </Link>
                    </FormLinks>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login