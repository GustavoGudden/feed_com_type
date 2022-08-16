import { NavLink, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";
import User from "./pages/User";
import { LinkedinLogo } from "phosphor-react";

import Post from "./pages/post";

const Header = styled.header`
  display: flex;
  background-color: #f5f4f4;
  padding: 1px;
  gap: 1rem;
  font-size: large;
  height: 5rem;
  align-items: center;
`;

const TextNav = styled.h1`
  text-decoration: none !important;
  color: black;
`;

const InputBusca = styled.div`
  width: 70%;
  display: flex;
  justify-content: flex-end;
  padding-right: 1rem;
`;

function Router() {
  return (
    <>
      <Header>
        <LinkedinLogo size={60} color="#2186f2" />
        <NavLink to={"/"} style={{ textDecoration: "none" }}>
          Home Page
        </NavLink>
        <NavLink to={"/User"} style={{ textDecoration: "none" }}>
          User
        </NavLink>
        <NavLink to={"/Post"} style={{ textDecoration: "none" }}>
          Post
        </NavLink>
      </Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/User" element={<User />}></Route>
        <Route path="/Post" element={<Post />}></Route>
      </Routes>
    </>
  );
}

export default Router;
