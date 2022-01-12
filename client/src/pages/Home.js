import Navbar from "../components/Navbar";
import Slider from "../components/Slider"
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import styled from "styled-components";

const Wrapper = styled.div`
    // background-color: #191919;
    // background: ${props => props.theme.bgSecondary};
    max-width: 1400px;
    // color: white
    margin: 0 auto;
`

const Home = () => {

    return (
        <Wrapper>
            {/* <Announcement /> */}
            <Navbar />
            <Slider />
            <Categories />
            <Products />
            <Newsletter />
            <Footer />
        </Wrapper>
    )
}

export default Home