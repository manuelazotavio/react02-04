import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import logo from '../../img/logo.png'
import Container from "./Container";

function NavBar() {
  return (
    <nav className={styles.navbar}>
    <Container>

      <ul className={styles.list}>
        <li className={styles.item} >
          <Link to={"/"}>Home</Link>
        </li>
        <li className={styles.item}>
    
          <Link to={"/contato"}>Contato</Link>
        </li>
      </ul>
    </Container>
    </nav>
  );
}

export default NavBar;
