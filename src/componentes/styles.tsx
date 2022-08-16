import styled from "styled-components";

export const Buttonc = styled.button`
  color: chartreuse;
  font-size: 1rem;
  margin: 1rem;
  padding: 0.25em 1em;
  border: 2px solid chartreuse;
  border-radius: 3px;
  background-color: white;
  width: 50%;

  &:hover {
    color: white;
    background-color: chartreuse;
  }
`;

export const BuscaInput = styled.input`
  width: 50%;
`;

export const BuscaHeader = styled(BuscaInput)`
  width: 25%;
`;

export const Textfild = styled.textarea`
  width: 50%;
  height: 30%;
  resize: none;
`;
export const PostContainer = styled.div`
  background-color: white;
  width: 80%;
  border-radius: 1rem;
  margin-top: 5px;
`;

export const UserContainer = styled.div`
  background-color: white;
  width: 80%;
  height: 70vh;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Chatcontainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  border: 1px solid black;
  width: 100%;
  height: 8%;
`;
