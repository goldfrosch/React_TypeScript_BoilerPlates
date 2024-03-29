import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
      font-family: "A14";
      box-sizing: inherit;
      margin: 0;
      padding: 0; 
      outline: none;
      text-decoration: none;
      list-style: none;
      color: inherit;
      font-size: inherit;
  };
  body {
    box-sizing: border-box;
    background-color: white;
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
      background: #ffffff;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background-color: #ced4da;
      &:hover {
          background-color: #adb5bd;
      }
    }
  };
  button {
    border: 0;
    outline: 0;
  };
`;

export default GlobalStyle;