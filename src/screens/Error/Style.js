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
  height: 100vh;
  background:linear-gradient(#0a0d1c,#051c2b);
`;

export const Content = styled.div`
    width: 600px;
    background:linear-gradient(#142541,#2d385a);
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1px;
    border: solid; 
    border-width: 1px 2px 2px 1px;
    border-color: #7FFFD4 #FFD700 #FFD700 #7FFFD4;
    img {
      width: 150px;
      margin: 10px 0 20px;
    }
    h1 {
      color: #FFFFFF;
      font-family: cursive;
      margin: 0 0 20px;
    }
  `;