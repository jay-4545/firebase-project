import { signOut } from "firebase/auth";
import { Button, Navbar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../services/firebaseServices";

function NavbarCo() {
  async function handleClick() {
    try {
      await signOut(auth);
      localStorage.removeItem("user");
    } catch (error) {
      console.log("error", error);
    }
  }
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <img
          src="/images/01.png"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          FIRE-BASE
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login/Register</Link>
        <Button onClick={handleClick}>Logout</Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarCo;
