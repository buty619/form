import React, { useState } from "react";
import validate from "../functions/validate";

const initialArticle = { name: "", text: "" };

export default function Form({ onSubmit, article=initialArticle }) {
  const [input, setInput] = useState(article);
  const [errors, setErrors] = useState({});

  const handleInputChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errors = validate(input);
    if (errors === null) {
      onSubmit(input);
      setErrors({});
    } else {
      setErrors(errors);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            value={input.name}
            onChange={handleInputChange}
            placeholder="name"
            name="name"
            style={errors.name && { border:"2px solid red"}}
          />
        </div>
        <div>
          <textarea
            value={input.text}
            onChange={handleInputChange}
            placeholder="text"
            name="text"
            style={errors.text && { border:"2px solid red"}}
          />
        </div>
        <button type="submit">UpLoad</button>
      </form>
    </div>
  );
}
