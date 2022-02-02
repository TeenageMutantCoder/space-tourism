import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    align-items: start;
  }
`;

export default Container;
