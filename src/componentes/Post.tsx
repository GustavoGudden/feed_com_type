import { useEffect, useState } from "react";
import styled from "styled-components";
import { Ipost } from "../@types/type";
import Image from "./imagen";
import { PostContainer } from "./styles";

const DivPost = styled.div`
  border-top: 1px solid black;
  padding: 1rem;
`;

function Post() {
  const [api, setapi] = useState<Array<Ipost>>([]);

  useEffect(() => {
    fetch("http://localhost:21262/teste")
      .then((Response) => Response.json())
      .then((data) => setapi(data.response));
  }, []);

  return (
    <PostContainer>
      {api.map((api) => {
        return (
          <DivPost key={api.id}>
            <h1>{api.titulo}</h1>
            <h2>{api.sub_titulo}</h2>
            <Image />
            <p>{api.texto}</p>
          </DivPost>
        );
      })}
    </PostContainer>
  );
}

export default Post;
