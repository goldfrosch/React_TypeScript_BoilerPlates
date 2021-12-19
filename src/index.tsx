import ReactDOM from "react-dom";

import App from "App";
import GlobalStyle from "styles/Global";

import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from "redux";
import rootStore, { rootSaga } from "modules";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootStore,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </>,
  document.getElementById("root")
);
