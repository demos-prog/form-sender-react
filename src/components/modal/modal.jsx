import React from "react";
import "./modal.css";

export default function Modal(props) {
  function handleSubmit(e) {
    e.preventDefault();
    props.setState((p) => !p);
  }

  return (
    <>
      <div className="modal">
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="new status"
            onChange={(e) => props.setStatus(e.target.value)}
            value={props.status}
          ></textarea>
          <button type="submit">Set new status</button>
        </form>
        <div className="BG" onClick={() => props.setState((p) => !p)}></div>
      </div>
    </>
  );
}
