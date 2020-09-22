import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import MuiPhoneNumber from "material-ui-phone-number";
import Button from "./Button";
import { checkForm } from "../functions";
function RegisterForm() {
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    const arrayValues = [name, surName, email, country, phone];
    const arrayClassName = [
      "joinUs__name",
      "joinUs__surname",
      "joinUs__email",
      "joinUs__country",
      "joinUs__phone",
    ];
    checkForm(arrayValues, arrayClassName);
  };
  return (
    <form
      id="register"
      className="joinUs__form"
      name="registerForm"
      autoComplete="off"
    >
      <TextField
        className="joinUs__name"
        label="Name"
        placeholder="Placeholder"
        multiline
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        className="joinUs__surname"
        label="Surname"
        placeholder="Placeholder"
        multiline
        value={surName}
        onChange={(e) => setSurName(e.target.value)}
      />
      <TextField
        className="joinUs__email"
        label="E-mail"
        placeholder="Placeholder"
        multiline
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        className="joinUs__country"
        label="Country"
        placeholder="Placeholder"
        multiline
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <MuiPhoneNumber
        defaultCountry={"es"}
        regions={"europe"}
        value={phone}
        onChange={(val) => setPhone(val)}
        className="joinUs__phone"
      />
      <p className="joinUs__text">
        We may communicate with you regarding this download and other srevices.
        Your information is protected by Axiory's Privacy Policy
      </p>
      <Button
        onClick={handleSubmit}
        text="Register for Free"
        cname="btnRegister"
      />
    </form>
  );
}

export default RegisterForm;
