// import { Provider } from "react-redux";
// import { store } from "./store";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { BaseRoutes } from "./view/routes/Baseroutes"

function App() {
  return (
    // <Provider store={store}>
      // <ToastContainer />
      <main id="app">
        <BaseRoutes />
      </main>
    // </Provider>
  );
}

export default App;
