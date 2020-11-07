import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background:linear-gradient(#0a0d1c,#051c2b);
`;

export const Form = styled.form`
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
  p#error {
    color: #FF3333;
    font-size: 20px;
    margin-bottom: 15px;
    border: 1px solid #FF3333;
    padding: 10px;
    width: 100%;
    text-align: center;
    border-radius: 20px;
  }
  p#success {
    color: #FFD700;
    font-size: 20px;
    margin-bottom: 15px;
    border: 1px solid #FFD700;
    padding: 10px;
    width: 100%;
    text-align: center;
    border-radius: 20px;
  }
  input {
    flex: 1;
    height: 46px;
    margin-bottom: 20px;
    padding: 0 20px;
    color: #000000;
    font-size: 20px;
    width: 90%;
    border: 1px solid #DDDDDD;
    background-color: #CDCDCD;
    border-radius: 20px;
    &::placeholder {
      color: #999999;
    }
  }
  button {
    color: #FFFFFF;
    font-size: 16px;
    background: #2196F3;
    background:linear-gradient(#0364c8,#2196f3);
    height: 56px;
    border: 0;
    border-radius: 20px;
    width: 100%;
    padding: 20px;
    margin-top: 10px;
  }
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #CDCDCD;
    width: 100%;
  }
  a {
    font-size: 16;
    font-weight: bold;
    color: #999999;
    text-decoration: none;
  }
`;