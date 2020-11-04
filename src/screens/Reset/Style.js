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

export const Form = styled.form`
  width: 600px;
  background:linear-gradient(rgba(20,37,65),rgba(45,56,90));
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100px;
    margin: 10px 0 40px;
  }
  h1 {
    color: #ffffff;
    font-family: sans-serif
  }
  p#error {
    color: #ff3333;
    margin-bottom: 15px;
    border: 1px solid #ff3333;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  p#success {
    color: #fff;
    border: 1px solid #16a085;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  input {
    flex: 1;
    height: 46px;
    margin-bottom: 20px;
    padding: 0 20px;
    color: #000000;
    font-size: 20px;
    width: 90%;
    border: 1px solid #ddd;
    background-color: #cdcdcd;
    border-radius: 20px;
    &::placeholder {
      color: #999;
    }
  }
  button {
    color: #fff;
    font-size: 16px;
    background: #ff6f0f;
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
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
  a {
    font-size: 16;
    font-weight: bold;
    color: #999;
    text-decoration: none;
  }
`;