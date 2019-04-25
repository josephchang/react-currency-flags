import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 20px;
  }

  * {
    box-sizing: border-box;
  }
`;

export const H1 = styled.h1`
  font-size: 30px;
  margin-bottom: 32px;
`;

export const H2 = styled.h2`
  font-size: 24px;
  margin: 0 0 24px;
`;

export const Examples = styled.div`
  display: grid;
  grid-template-columns: 360px 360px;
  grid-gap: 20px;
`;

export const Example = styled.div`
  border: 1px solid #ccc;
  border-radius: 2px;
  box-shadow: 2px 2px 5px -2px #bbb;
  padding: 16px;
`;

export const Flags = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: space-around;
`;

export const Flag = styled.figure`
  margin: 0;
  text-align: center;
`;

export const FlagWrapper = styled.div`
  margin-bottom: 4px;
`;

export const FlagSize = styled.figcaption`
  font-size: 16px;
`;
