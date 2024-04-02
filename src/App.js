import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Contato from "./components/pages/Contato";
import Container from "./components/layouts/Container";

function App() {
  return (
    <Router>
      <ul>
        <Link to={"/"}>Home</Link>
        <Link to={"/contato"}>Contato</Link>
      </ul>
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/contato" element={<Contato />}></Route>
        </Routes>
      </Container>
      <p>Footer</p>
    </Router>
  );
}

export default App;
