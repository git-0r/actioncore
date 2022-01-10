import { useEffect, useState } from "react"
import styled from "styled-components"
// import { popularProducts } from "../data"
import Product from "./Product"
import axios from "axios"
import { mobile } from "../responsive"

const Container = styled.div`
    padding: 20px;
`
const Wrapper = styled.div`
    display: flex;
    // flex-direction: column;
    flex-wrap: wrap;
    // justify-content:space-around;
    // align-items: ;
    justify-content: space-evenly;
`
const Title = styled.p`
    text-align:center;
    font-family: "Luckiest Guy", cursive;
    letter-spacing: 5px;
    font-size:70px;
    ${mobile({ fontSize: "40px" })}
`

const Products = ({ cat, filters, sort }) => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(
                    process.env.NODE_ENV !== "production" ?
                        (cat
                            ? `http://localhost:3001/api/products?category=${cat}`
                            : "http://localhost:3001/api/products") :
                        (cat
                            ? `/api/products?category=${cat}`
                            : "/api/products")
                )
                setProducts(res.data)
            } catch (error) { }
        }
        getProducts()
    }, [cat])

    useEffect(() => {
        cat &&
            setFilteredProducts(
                products.filter((item) =>
                    Object.entries(filters).every(([key, value]) => item[key].includes(value)
                    )
                )
            )
    }, [products, cat, filters])

    useEffect(() => {
        if (sort === "newest") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.createdAt - b.createdAt))
        } else if (sort === "asc") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.price - b.price)
            )
        } else {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => b.price - a.price)
            )
        }
    }, [sort])

    return (
        <Container>
            {!cat && <Title>Popular products</Title>}
            <Wrapper>
                {cat ?
                    filteredProducts.map(item => (
                        <Product item={item} key={item._id} />
                    ))
                    : products
                        // .slice(0, 3)
                        .map((item) => <Product item={item} key={item._id} />)
                }
            </Wrapper>
        </Container>
    )
}

export default Products