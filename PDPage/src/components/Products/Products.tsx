import React, { ReactElement, useState } from 'react'
import styled from 'styled-components'
import PRODUCTS from '../../util/db.json'
import { useNavigate } from 'react-router-dom';

const ProductsWrapper = styled.div`
    padding: 5px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`
const ProductCardWrapper = styled.ul`
    border: 1px solid rgba(153,153,153, 0.2);   
    margin: 15px;
    padding: 0;
    list-style-type: none;
    min-width: 340px;
    height: 100%;
    flex: 1;    
`

const ProductCardBody = styled.div`
    text-align: left;
    padding: 10px;
`

const ProductImageWrapper = styled.li``

const ProductImage = styled.img`
    width: 100%;
`

const ProductTitle = styled.li`
    font-size: 20px;
    font-weight: 700;
`
const ProductCardHeader = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const ProductSupportWrapper = styled.li``

const ProductSupportBody = styled.ul`
    display: flex;
    flex-direction: row;
    list-style-type: none;
    justify-content: flex-end;
    flex-wrap: wrap;
    padding: 0;
`

const ProductSupportItem = styled.li`
    padding: 0px 4px 0px 4px;
    border: 1px solid rgba(153,153,153, 0.3);
    margin-left: 5px;
    margin-bottom: 2.5px;
    border-radius: 2.5px;
`

const ProductPrice = styled.li`
    font-size: 20px;
    font-weight: 100;
    padding: 10px 0px 0px 0px;
`
const ViewProductButton = styled.button`
    width: 100%;
    height: 45px;
    font-size: 15px;
    margin-top: 15px;
    text-align: center;
    background-color: white;
    cursor: pointer;

    &:hover {
        background-color: black;
        color: white;
    }
`

function Products() {

    const [products, setProducts] = useState<Array<ProductCardPropType>>(() => PRODUCTS.products)

    return (
        <ProductsWrapper>
            {
                products.map((product) => (<ProductCard key={product.id} {...product} />))
            }
        </ProductsWrapper>
    )
}

type ProductCardPropType = {
    id: string,
    title: string,
    supports: Array<string>,
    img: string,
    price: number
}

function ProductCard({ id, title, supports, img, price }: ProductCardPropType): ReactElement {
    const navigate = useNavigate();

    const handleNavigation = (id: string) => {
        navigate(`/pdp/${id}`)
    }

    return (
        <ProductCardWrapper>
            <ProductImageWrapper>
                <ProductImage src={img} />
            </ProductImageWrapper>
            <ProductCardBody>
                <ProductCardHeader>
                    <ProductTitle>{title} {id}</ProductTitle>
                    <ProductSupportWrapper>
                        <ProductSupportBody>
                            {
                                supports.map(support => (<ProductSupportItem>{support}</ProductSupportItem>))
                            }
                        </ProductSupportBody>
                    </ProductSupportWrapper>
                </ProductCardHeader>
                <ProductPrice>$ {price}</ProductPrice>
                <ViewProductButton onClick={() => handleNavigation(id)}>view</ViewProductButton>
            </ProductCardBody>
        </ProductCardWrapper>
    )
}

export default Products
