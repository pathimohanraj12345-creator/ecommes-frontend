import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../Components/Product'
import axios from "axios"

function HomeScreen() {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        // Updated with your correct live Render backend domain
        const { data } = await axios.get("https://ecommes-backend.onrender.com/api/products/");
        setproducts(data);
      } catch (error) {
        console.error("error fetching products", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Latest Product</h1>
      <Row>{products.map(product =>
        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
          <Product product={product}/>
        </Col>
      )}</Row>
    </div>
  )
}

export default HomeScreen
