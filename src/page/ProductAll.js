import React, { useState, useEffect } from "react";
import ProductCard from "../component/ProductCard";
import { Row, Col, Container } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProducts = async () => {
    //쿼리값이 없으면 빈스트링을 searchQuery에 넣어준다
    let searchQuery = query.get("q") || "";
    let url = `https://my-json-server.typicode.com/jeeseulah/ShoppingMall/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    //console.log(data);
    setProductList(data);
  };
  // useEffect(함수, 배열)
  useEffect(() => {
    getProducts();
  }, [query]);
  return (
    <>
      <Container className="mb-5">
        <Row>
          {productList.map((item) => (
            <Col md={6} lg={3}>
              <ProductCard product={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ProductAll;
