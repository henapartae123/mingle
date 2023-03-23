import "./App.css";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import Home from "./Home";
import { Navigate } from "react-router-dom";

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };
  return (
    <div className="App">
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    </div>
  );
}

export default App;
