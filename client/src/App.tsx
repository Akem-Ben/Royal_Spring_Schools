// import { Provider } from "react-redux";
// import { store } from "./store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BaseRoutes } from "./view/routes/Baseroutes"
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
    <main id="app">
        <ToastContainer />
        <BaseRoutes />
      </main>
      </Provider>
  );
}

export default App;
