import { useState } from "react";
import "./Form.css";
import TextField from "../TextField/TextField";
import OptionList from "../OptionList/OptionList";
import Button from "../Button/Button";

const Form = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // return console.log("handle Submit", event);
  };

  return (
    <section className="Form">
      <form onSubmit={handleSubmit}>
        <h2>Fill in form to add collaborator</h2>
        <TextField title="Name" placeholder={"Type your name"} required />
        <TextField title="Position" placeholder={"Type your position"} required />
        <TextField title="Picture" placeholder="Upload your picture" required />
        <OptionList />
        <Button text="Create collaborator" />
      </form>
    </section>
  );
};

export default Form;
