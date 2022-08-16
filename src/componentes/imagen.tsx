import styled from "styled-components";

const Cont = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Imagena = styled.img`
  width: 100%;
  height: 25%;
  border-radius: 1rem;
`;

function Image() {
  return (
    <Cont>
      <Imagena src="https://i.ibb.co/NWJ704f/city.jpg" alt="city" />
    </Cont>
  );
}

export default Image;
