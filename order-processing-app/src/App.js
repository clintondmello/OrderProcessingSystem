import logo from "./logo.svg";
import "./App.css";
import { Container, Typography } from "@material-ui/core";
import Order from "./Components/Order/index.js";

function App() {
  return (
    <Container maxWidth="md">
      <Typography gutterBottom variant="h2" align="center">
        Order Processing System
      </Typography>
      <Order />
    </Container>
  );
}

export default App;
