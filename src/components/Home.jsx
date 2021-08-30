import { Col, Row } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getproducts, selectproducts } from '../features/products/productsSlice'

const Home = () => {

    const dispatch = useDispatch()

    const products = useSelector(selectproducts)

    useEffect(() => {
        dispatch(getproducts())
    }, []);

    return (
        <div class="products-catagories-area clearfix">
            <Row>

                {
                    products.map((p, i) => {
                        return (
                            <CardItem product={p} />
                        )
                    })
                }
            </Row>
        </div>
    )
}

function CardItem({ product }) {
    return (
        <div className="single-products-catagory clearfix">
            <a href="shop.html">
                <img style={{height:"320px"}}   src={'http://localhost:5000/getfile/' + product.image} alt />
                {/* Hover Content */}
                <div className="hover-content">
                    <div className="line" />
                    <p>${product.price}</p>
                    <h4> {product.name} </h4>
                </div>
            </a>
        </div>
    )
}

export default Home