import ReactDOM from "react-dom/client";

import App from "App";
import GlobalStyle from "styles/Global";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <>
    <RecoilRoot>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </>
);
