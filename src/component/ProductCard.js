import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  console.log(product);
  const newImg = <img src="../images/icon_02.gif" alt="신상품" />;
  const delivery = <img src="../images/icon_09.gif" alt="배송" />;
  const sale = <img src="../images/icon_11.gif" alt="sale" />;
  //console.log(product?.product.new);
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/Product/${product.id}`);
  };
  return (
    <>
      <Card className="border-0">
        <Card.Img
          variant="top"
          src={product?.img}
          style={{ height: "25rem" }}
          onClick={showDetail}
        />
        <Card.Body>
          <Card.Text>
            <span>{product?.new && newImg}</span>
            <span>{product?.sale && sale}</span>
            <span>{product?.delivery && delivery}</span>
            <h5 className="fw-bold">{product?.title}</h5>
            <div>{product?.price}원</div>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard;
