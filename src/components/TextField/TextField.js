import { useState } from "react";
import "./TextField.css";

const TextField = (props) => {
  const [value, updateValue] = useState("");
  // const [value, updateTitle] = useState("");
  // const [value, updatePhoto] = useState("");

  const handleValueUpdate = (e) => {
    console.log("cambio", e.target.value);
    updateValue(e.target.value);
  };
  return (
    <div className="TextField">
      <label>{props.title}</label>
      <input
        placeholder={`${props.placeholder}...`}
        required={props.required}
        value={value}
        onChange={handleValueUpdate}
      />
    </div>
  );
};

export default TextField;
