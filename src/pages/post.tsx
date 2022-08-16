import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { BuscaInput, Buttonc, Textfild } from "../componentes/styles";

const Main = styled.main`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.section`
  width: 50%;
  height: 60%;
  background-color: #f5f4f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
`;

const Row = styled.div`
  display: flex;
  width: 50%;
  justify-content: flex-start;
`;

function Post() {
  const [titulo, setTitulo] = useState("");
  const [sub, setSub] = useState("");
  const [text, setText] = useState("");

  const update = {
    titulo: `${titulo}`,
    sub_titulo: `${sub}`,
    texto: `${text}`,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(update),
  };

  const navigation = useNavigate();

  const teste = () => {
    fetch("http://localhost:21262/add", options)
      .then((data) => {
        return data.json();
      })
      .then((update) => {
        console.log(update);
      })
      .catch((e) => {
        console.log(e);
      });
    console.log("teste executado");
    navigation("/");
  };

  return (
    <Main>
      <Container>
        <Row>
          <p>Titulo:</p>
        </Row>
        <BuscaInput onChange={(e) => setTitulo(e.target.value)} />
        <Row>
          <p>sub-Titulo:</p>
        </Row>
        <BuscaInput onChange={(e) => setSub(e.target.value)} />
        <Row>
          <p>Texto:</p>
        </Row>
        <Textfild onChange={(e) => setText(e.target.value)} />
        <Buttonc onClick={teste}>enviar</Buttonc>
      </Container>
    </Main>
  );
}

export default Post;
