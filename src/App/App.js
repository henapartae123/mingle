import "./App.css";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import Home from "../Home/Home";
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
