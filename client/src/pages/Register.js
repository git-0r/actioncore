import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { mobile } from "../responsive"
import { register } from "../redux/apiCalls"
import { Link } from "react-router-dom"
import Notification from "../components/Notification"

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
    padding: 30px 20px;
    background-color: transparent;
    border-radius: 5px;
    border-width: 2px;
    border-style: solid;
    border-image: linear-gradient(#FD2D00,#DF007C) 1;
    ${mobile({ width: "75%" })}

`
const Title = styled.h1`
    color: #FF3535;
    font-family: 'Ubuntu';
    background-image: linear-gradient(135deg, #6699FF 0%, #FF3366 100%) ;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-size: 250%;
    font-weight: 900;
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
    background-color: #1E1C1C;
    color: white;
    cursor: pointer;
    border-width: 2px;
    border-style: solid;
    border-image: linear-gradient(#FD2D00,#DF007C) 1;
    transition: all 0.2s;

    &:hover{
        transform: scale(1.05);
        box-shadow: 2px 2px 2px #FD2D00;
    }
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
    const dispatch = useDispatch()
    const [notification, setNotification] = useState(null)
    const navigate = useNavigate()

    const handleRegistration = async (e) => {
        e.preventDefault()
        try {
            register(dispatch, { name, lastName, username, email, password, })
            navigate("/login")

        } catch (error) {
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
                <Title>Create an account</Title>
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
                        <Link to="/" style={{ width: "40%" }}>
                            <Button style={{ width: "100%" }}>CANCEL</Button>
                        </Link>
                        <Button>CREATE</Button>
                    </Buttons>

                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register