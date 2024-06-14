import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Container, Dropdown } from "react-bootstrap";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const newImg = <img src="../images/icon_02.gif" alt="신상품" />;
  const delivery = <img src="../images/icon_09.gif" alt="배송" />;
  const sale = <img src="../images/icon_11.gif" alt="sale" />;
  let { id } = useParams();
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/jeeseulah/ShoppingMall/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };
  //  https://my-json-server.typicode.com/jeeseulah/ShoppingMall
  // API는 useEffect에 넣어라
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <>
      <Container>
        <Row>
          <Col md={6} className="text-center text-lg-start">
            <img
              src={product?.img}
              alt="제품이미지"
              className="img-fluid"
            ></img>
          </Col>
          <Col md={6}>
            <div className="p-3">
              <p>
                <span>{product?.new && newImg}</span>
                <span>{product?.sale && sale}</span>
                <span>{product?.delivery && delivery}</span>
              </p>
              <h3 className="fw-bold">{product?.title}</h3>
              <p>{product?.description}</p>
              <p>가격 : {product?.price}원</p>
              <Dropdown>
                <Dropdown.Toggle variant="danger" id="dropdown-basic">
                  사이즈
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    {product?.size[0]}
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    {product?.size[2]}
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    {product?.size[4]}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="text-end p-3 border-top">
              <button className="btn btn-outline-danger">구매하기</button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="my-5 py-3 border-top">
            <h4 className="text-danger">의류 관리 가이드</h4>
            <p>
              여러분도 환경 보호를 돕고 더욱 지속 가능한 패션을 만들 수
              있습니다. 불필요한 옷이나 가정용 직물을 H&M 매장에 가지고 오면
              다시 입을 수 있는 옷을 만드는 데 사용되거나 재사용 또는
              재활용됩니다.
            </p>
            <h5>의류 관리법</h5>
            <ul>
              <li>걸어서 건조</li>
              <li>드라이클리닝 전용</li>
              <li>필요 시 비염소계 표백제만 사용 가능</li>
              <li>세탁 금지</li>
              <li>중온 다림질</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetail;
