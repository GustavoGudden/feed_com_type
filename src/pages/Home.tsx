import { ChatCentered, UserCircle } from "phosphor-react";
import styled from "styled-components";
import Post from "../componentes/Post";
import { Chatcontainer, UserContainer } from "../componentes/styles";

const Main = styled.main`
  width: 100%;
  height: 80vh;
  display: grid;
  grid-template-columns: 25% 50% 25%;
  gap: 1rem;
`;

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem;
`;

function Home() {
  return (
    <Main>
      <Container>
        {/* 1 coluna */}
        <Container>
          <UserContainer>
            <UserCircle size={100} color="#282A36" />
            <h1>Gustavo</h1>
            <Chatcontainer>
              <ChatCentered size={30} />
              <h2>teste</h2>
            </Chatcontainer>
          </UserContainer>
        </Container>
      </Container>

      <Container>
        {/* 2 coluna */}
        <Post></Post>
      </Container>

      <Container> {/* 3 coluna */}</Container>
    </Main>
  );
}

export default Home;
