import ReactDOM from "react-dom/client";
import AuthContextProvider from "./context/AuthContext.tsx";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </>
);
