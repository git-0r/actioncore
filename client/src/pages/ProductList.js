import styled from "styled-components"
import Navbar from "../components/Navbar"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { mobile } from "../responsive"
import { useLocation } from "react-router-dom"
import { useState } from "react"

const Container = styled.div`

    background: ${props => props.theme.bgSecondary};
    color:${props => props.theme.fontColorPrimary};

    & .products {
        ${mobile({
    flexDirection: "row",
    height: "auto"
})
    }   
    }

    // flexDirection: "column",
    //     height: "350px",
    //     overflowX: "auto",
`

const Title = styled.h1`
    margin: 20px;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    margin: 20px;
    ${mobile({ margin: "0px 20px", display: "flex", flexDirection: "column" })}
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0px" })}
`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    border: 1px solid #FF3535;
    background: white;
    ${mobile({ margin: "10px 0px" })}
`

const Option = styled.option``


const ProductList = () => {
    const location = useLocation()
    const getCategoryFromLocation = (location) => {
        const category = location.pathname.split("/")[2]
        if (category.includes("%20")) {
            return category.split("%20").join(" ")
        }
        else { return category }
    }
    const cat = getCategoryFromLocation(location)
    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState("newest")

    const handleFilters = (e) => {
        const value = e.target.value
        setFilters({
            ...filters,
            [e.target.name]: value
        })
    }

    return (
        <Container>
            <Navbar />
            {/* <Announcement /> */}
            <Title>{cat}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select name="color" onChange={handleFilters}>
                        <Option disabled>Color</Option>
                        <Option>white</Option>
                        <Option>blue</Option>
                        <Option>red</Option>
                        <Option>blue</Option>
                        <Option>yellow</Option>
                        <Option>green</Option>
                        <Option>black</Option>
                    </Select>
                    {/* <Select name="size" onChange={handleFilters}>
                        <Option disabled>Size</Option>
                        <Option>xs</Option>
                        <Option>s</Option>
                        <Option>m</Option>
                        <Option>L</Option>
                        <Option>xl</Option>
                    </Select> */}
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select onChange={e => setSort(e.target.value)}>
                        <Option value="newest">Newest</Option>
                        <Option value="asc">Price (asc)</Option>
                        <Option value="desc">Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort} />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList