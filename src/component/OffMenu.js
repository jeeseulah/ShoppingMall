import React from "react";
import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { List } from "react-bootstrap-icons";

const OffMenu = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const menuList = [
    "유아",
    "아동",
    "여성",
    "남성",
    "H&M HOME",
    "스포츠",
    "sale",
    "지속가능성",
  ];
  return (
    <>
      <List onClick={handleShow} size={50} />

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>메뉴리스트</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="list-unstyled mt-2">
            {menuList.map((menu) => (
              <li className="ms-3 my-3">{menu}</li>
            ))}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffMenu;
