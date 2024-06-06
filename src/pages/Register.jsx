import { createUserWithEmailAndPassword } from "firebase/auth";
import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../services/firebaseServices";

function Register() {
  async function handleSubmit(e) {
    e.preventDefault();

    if (e.target["password"].value !== e.target["confirmPassword"].value) {
      alert("password does not match!");
      return;
    }
    try {
      const email = e.target["email"].value;
      const password = e.target["password"].value;

      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log("result", result);
      if (result.user) {
        localStorage.setItem("user", JSON.stringify(result?.user));
      } else {
        localStorage.removeItem("user");
        throw new Error();
      }
    } catch (error) {
      console.log("user registration failed");
    }
  }

  return (
    <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Your email" />
        </div>
        <TextInput
          id="email"
          type="email"
          name="email"
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value="Your password" />
        </div>
        <TextInput id="password" name="password" type="password" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="confirmPassword" value="Your password" />
        </div>
        <TextInput
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          required
        />
      </div>
      <Button type="submit">Submit</Button>
      <Link className="text-center" to="/login">
        Login
      </Link>
    </form>
  );
}

export default Register;
