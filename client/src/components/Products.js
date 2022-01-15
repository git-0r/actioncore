import { useEffect, useState } from "react"
import styled from "styled-components"
import Product from "./Product"
import axios from "axios"
import { mobile } from "../responsive"
import ProductInList from "./ProductInList"

const Container = styled.div`
    padding: 20px;
    background: ${props => props.theme.bgSecondary};
    color: ${props => props.theme.fontColorSecondary};
    
    ${mobile({ padding: "20px 0" })}

`
const Wrapper = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-evenly;

    &::-webkit-scrollbar {
    display: none;
    }

     & div:nth-of-type(2n) div {
        // order: -1
    }

    ${mobile(
    {
        flexDirection: "column",
        height: "350px",
        overflowX: "auto",
    }
)}
`
const Title = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 900;
    font-size: 8rem;
    text-align: center;
    background-image: linear-gradient(135deg, #6699FF 0%, #FF3366 100%) ;
     background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    ${mobile({ fontSize: "3rem" })}
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
        <Container >
            {!cat && <Title>Popular products</Title>}
            <Wrapper className="products">
                {cat ?
                    filteredProducts.map(item => (
                        <ProductInList item={item} key={item._id} />
                    ))
                    : products
                        .slice(0, 8)
                        .map((item) => <Product item={item} key={item._id} />)
                }
            </Wrapper>
        </Container>
    )
}

export default Products