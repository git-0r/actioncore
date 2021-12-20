import styled from "styled-components"


const BannerImg = styled.img`
    margin: 50px auto;
    display:block;
    width:95vw;
    border-radius: 5px;
    background: black;
    cursor:pointer;
`


const Banner = ({ src }) => {
    return (
        <BannerImg src={src}></BannerImg>
    )
}

export default Banner