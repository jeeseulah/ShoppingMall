import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./component/Navbar";
import PrivateRoute from "./route/PrivateRoute";

function App() {
  //false는 로그인 안된상태, true는 로그인한 상태
  const [authenticate, setAuthenticate] = useState(false);
  useEffect(() => {
    console.log("로그인 상태 확인", authenticate);
  }, [authenticate]);
  return (
    <>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />}></Route>
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        ></Route>
        <Route
          path="/Product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
