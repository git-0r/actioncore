import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import { useState } from "react"
import styled from "styled-components"
import { sliderItems } from "../data"
import { mobile } from "../responsive"

const Container = styled.div`
    height:80vh;
    width: 100%;
    display: flex;
    position: relative;
    overflow: hidden;
    z-index:1;
    ${mobile({ height: "auto" })}
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform : translateX(${props => props.slideIndex * -100}vw)
`
const Slide = styled.div`
    width: 100vw;
    height: 100%;
    display:flex;
    align-items: center;
    background-color: #${props => props.bg};
    position: relative;
    ${mobile({ height: "auto" })}
`

const ImgContainer = styled.div`
    height: 100%;
    width: 100%;
    flex:1;
`
const Image = styled.img`
    height: 100%;
    width: 100%;    
    display:block;
    ${mobile({ objectFit: "fill", height: "100%" })}
`

const InfoContainer = styled.div`
    flex:1;
    padding: 50px;
    position: absolute;
    font-family: 'Source Code Pro', monospace;  
    ${mobile({ display: "none" })} 
`
const Title = styled.h1`
    font-size: 70px;

`
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`


const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex === 0 ? 3 : slideIndex - 1)
            console.log("set to", slideIndex)
        }
        else {
            setSlideIndex(slideIndex === 3 ? 0 : slideIndex + 1)
        }

    }
    // setTimeout(() => {
    //     console.log(slideIndex)
    //     setSlideIndex(slideIndex === 3 ? 0 : slideIndex + 1)
    // }, 3000)

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined style={{ color: "#FF3535" }} />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(item => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        {/* <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>SHOP NOW</Button>
                        </InfoContainer> */}
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")} >
                <ArrowRightOutlined style={{ color: "#FF3535" }} />
            </Arrow >
        </Container >
    )
}

export default Slider