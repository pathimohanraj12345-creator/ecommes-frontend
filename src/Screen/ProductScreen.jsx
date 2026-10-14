import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import products from "../products";
import { Button, Card, Col, ListGroup, Row, Image } from "react-bootstrap";
import Rating from "../Components/Rating";
import axios from "axios";

function ProductScreen() {
  const { id } = useParams();
  const [product,setproduct]=useState(null)
    useEffect(() => {
      async function fetchProduct() {
        try {
          const { data } = await axios.get(
            `http://127.0.0.1:8000/api/products/${id}/`
          );
          setproduct(data);
        } catch (error) {
          console.error("error fetching products", error);
        }
      }
      fetchProduct();
    }, [id]);

  
if (!product) {
  return <h2>Loading...</h2>;
}

  return (
    <>
      <Link to="/" className="btn btn-dark my-3">
        {" "}
        Go Back
      </Link>

      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={6}>
          <ListGroup>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
                color={"#f8e825"}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Price : {product.price}</h5>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>Description : {product.description}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      <Row>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price : </Col>
                  <Col>
                    <strong>{product.price}</strong>
                  </Col>
                </Row>

                <Row>
                  <Col>Status:</Col>
                  <Col>
                    <strong>
                      {product.countInStock > 1 ? "In stock" : "out of stock"}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup>
                <Button className="btn btn-primart " type="button">
                  Add Cart
                </Button>
              </ListGroup>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default ProductScreen;
