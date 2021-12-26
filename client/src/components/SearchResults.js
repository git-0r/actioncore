import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import styled from "styled-components"
import { publicRequest } from "../requestMethods"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Newsletter from "./Newsletter"
import Product from "./Product"

const Container = styled.div``
const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`
const Title = styled.h1``

const SearchResults = () => {
    const location = useLocation()
    const searchText = location.pathname.split("/")[2]
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function searchProducts() {
            const res = await publicRequest.get(`products/findProducts/${searchText}`)
            setProducts(res.data)
            console.log(products, res.data)
        }
        searchProducts()
    }, [searchText])

    return (
        <Container>
            <Navbar />
            <Title>Search Results</Title>
            <Wrapper>
                {products.map(item => (
                    <Product item={item} key={item._id} />))}
            </Wrapper>
            {/* <Wrapper>
                {cat ?
                    filteredProducts.map(item => (
                        <Product item={item} key={item._id} />
                    ))
                    : products
                        // .slice(0, 3)
                        .map((item) => <Product item={item} key={item._id} />)
                }
            </Wrapper> */}
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default SearchResults