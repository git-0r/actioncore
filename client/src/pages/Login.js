import { SportsEsports } from "@material-ui/icons"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import styled, { keyframes } from "styled-components"
import Notification from "../components/Notification"
import { login } from "../redux/apiCalls"
import { operationComplete, operationStart } from "../redux/statusRedux"
import { mobile } from "../responsive"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

const Wrapper = styled.div`
    width: 30%;
    padding: 20px;
    background-color: transparent;
    border-radius: 5px;
    border-width: 2px;
    border-style: solid;
    border-image: linear-gradient(#FD2D00,#DF007C) 1;

    ${mobile({ width: "75%" })}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    font-family: 'Ubuntu';
    background-image: linear-gradient(135deg, #6699FF 0%, #FF3366 100%) ;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-size: 350%;
    font-weight: 900;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 1rem 0px;
    padding: 10px;
`

const Button = styled.button`
    width: 40%;
    padding: 15px;
    background-color: #1E1C1C;
    cursor: pointer;
    font-weight: 500;
    color: white;
    border-width: 2px;
    border-style: solid;
    border-image: linear-gradient(#FD2D00,#DF007C) 1;
    transition: all 0.2s;
    margin: 1rem 0px;

    &:hover{
        transform: scale(1.05);
        box-shadow: 2px 2px 2px #FD2D00;
    }
`
const FormLink = styled.a`
    margin: 5px 0px;
    color: #191919;
    font-size: 1.2rem;
    text-decoration: underline;
    cursor: pointer;
`
const Error = styled.span`
    color: red;
`

const FormLinks = styled.div`
    margin: 5px 0px;
    cursor: pointer;
`
const rotate = keyframes`
    from{
        transform: rotate(0deg)
    }
    to{
        transform: rotate(360deg)
    }
`
const Logo = styled.div`
    animation: ${rotate} 5s linear infinite;
`

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const { isFetching, error } = useSelector(state => state.status)
    const [notification, setNotification] = useState(null)

    const handleClick = async (e) => {
        e.preventDefault()
        try {
            dispatch(operationStart())

            await login(dispatch, { username, password })
            dispatch(operationComplete())
        } catch (error) {
            console.log(error.message)
            setNotification(<Notification reason="failure" message="Error !" />)
            setTimeout(() => {
                setNotification(null)
            }, 3000)
        }

    }


    return (
        <Container>
            {notification}
            <Wrapper>
                <Title>Sign In</Title>
                <Form>
                    <Input placeholder="username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input placeholder="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {
                        isFetching
                            ? <Button disabled={isFetching} style={{ padding: "5px 0" }}>
                                <Logo>
                                    <SportsEsports style={{ fontSize: "2rem", color: "#FF4545" }} />
                                </Logo>
                            </Button>

                            : <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
                    }
                    {error && <Error>Something went wrong...</Error>}
                    <FormLink>Forgotten password?</FormLink>
                    <FormLinks>
                        <Link to="/register">Create New Account
                        </Link>
                    </FormLinks>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login