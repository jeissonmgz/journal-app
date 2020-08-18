import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from "validator";

export const RegisterScreen = () => {
  const [formValues, handleInputChange] = useForm({
    name: "Jeisson",
    email: "jeissonmgz@gmail.com",
    password: "123456",
    password2: "123456",
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValue()) {
      console.log(name, email, password, password2);
    }
  };

  const isFormValue = () => {
    if (name.trim().length === 0) {
      console.log("Name required");
      return false;
    } else if (!validator.isEmail(email)) {
      console.log("Email is not valid");
      return false;
    } else if (password !== password2 && password.length < 5) {
      console.log(
        "Password should be at least 6 characters and match each other"
      );
      return false;
    }
    return true;
  };

  return (
    <>
      <h3 className="auth__title mb-5">Register</h3>
      <form onSubmit={handleRegister}>
        <div className="auth__alert-error">Datos incompletos</div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          value={password}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Confirm"
          name="password2"
          className="auth__input"
          value={password2}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-primary btn-block mb-5 mt-1">
          Register
        </button>
        <Link className="link" to="/auth/login">
          Already registered?
        </Link>
      </form>
    </>
  );
};
