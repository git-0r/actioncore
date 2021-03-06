import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import { useState } from "react"
import styled from "styled-components"
import { sliderItems } from "../data"
import { mobile } from "../responsive"

const Container = styled.div`
    height:80vh;
    max-height: 500px;
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
    background-color: #${props => props.theme.bgPrimary};
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

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined style={{ color: "#FF3535" }} />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(item => (
                    <Slide key={item.id}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
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