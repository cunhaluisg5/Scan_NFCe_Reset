import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 85vh;
  background:linear-gradient(rgba(10,13,65),rgba(10,13,28));
  h1 {
      color: #fff
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  background:linear-gradient(rgba(0,141,0),rgba(0,179,55));
  p {
    margin-left: 20px;
  }
`;