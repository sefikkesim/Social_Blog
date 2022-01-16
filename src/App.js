import "./App.css";

import AuthContextProvider from "./context/AuthContextProvider";
import AppRouter from "./router/AppRouter";
import { Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <AppRouter>
          
        </AppRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
