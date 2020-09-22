import React from "react";
import "./styles/Button.css";
function Button({ text, cname, flag, onClick }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Only execute onclick method when is defined
    onClick && onClick();
  };
  return (
    <div className="button">
      <button onClick={handleSubmit} className={`button__btn ${cname}`}>
        {text}
      </button>
      {flag && <p className="button__text">Trading is Risky</p>}
    </div>
  );
}

export default Button;
