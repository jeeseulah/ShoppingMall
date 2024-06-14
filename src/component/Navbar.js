import React from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Container, Form } from "react-bootstrap";
import { Person, Search } from "react-bootstrap-icons";
import OffMenu from "./OffMenu";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };
  const goHome = () => {
    navigate("/");
  };
  const search = (e) => {
    //e.preventDefault();
    console.log("keyDown");
    if (e.key === "Enter") {
      e.preventDefault();
      console.log("enter를 클릭했어요.", e.key);
      let keyword = e.target.value;
      console.log("keyword", keyword);
      navigate(`/?q=${keyword}`);
    }
  };
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
      <Container className="mb-5">
        {/* 로그인버튼 */}
        {authenticate ? (
          <div className="d-flex justify-content-end align-items-center mt-2">
            <Person />
            <div
              className="pointer"
              onClick={() => {
                setAuthenticate(false);
              }}
            >
              로그아웃
            </div>
          </div>
        ) : (
          <div className="d-flex justify-content-end align-items-center mt-2">
            <Person />
            <div className="pointer" onClick={goToLogin}>
              로그인
            </div>
          </div>
        )}
        {/* 로고 */}
        <div className="text-center mt-4 d-none d-md-block">
          <img
            src="../images/hm-logo-1.png"
            alt="로고"
            width="100px"
            className="pointer"
            onClick={goHome}
          ></img>
        </div>
        <div className="d-none d-md-block">
          <Row>
            <Col lg={2}></Col>
            {/* 네비게이션 바 */}
            <Col lg={8} className="text-center">
              <ul className="list-unstyled d-flex fw-bold justify-content-center mt-2">
                {menuList.map((menu) => (
                  <li className="ms-3">{menu}</li>
                ))}
              </ul>
            </Col>
            {/* 검색기능 */}
            <Col lg={2}>
              <form
                className="d-flex justify-content-end align-items-center"
                role="search"
              >
                <Search />
                <input
                  className="form-control me-2 border-0 border-bottom"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onKeyDown={(event) => {
                    search(event);
                  }}
                ></input>
              </form>
              {/* <Form
                inline
                className="d-flex justify-content-end align-items-center"
              >
                <Search />
                <Form.Control
                  className="form-control me-2 border-0 border-bottom"
                  type="text"
                  placeholder="Search"
                  onKeyUp={(event) => {
                    search(event);
                  }}
                />
              </Form> */}
            </Col>
          </Row>
        </div>
        {/* 오프캔버스 일 때 로고 */}
        <div className="d-md-none">
          <OffMenu />
          <img src="../images/hm-logo-1.png" alt="로고" width="60px"></img>
        </div>
      </Container>
    </>
  );
};

export default Navbar;
