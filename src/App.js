import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Contato from "./components/pages/Contato";
import Container from "./components/layouts/Container";
import NavBar from "./components/layouts/NavBar";
import Footer from "./components/layouts/Footer";

function App() {
  return (
    <Router>
    <NavBar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/contato" element={<Contato />}></Route>
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
