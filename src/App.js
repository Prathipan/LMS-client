import { Container } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppLayout from "./components/layout/AppLayout";
import { UserProvider } from "./context/userContext";

function App() {
  return (
    <UserProvider>
      <Container>
        <Router>
          <AppLayout />
        </Router>
      </Container>
    </UserProvider>
  );
}

export default App;
