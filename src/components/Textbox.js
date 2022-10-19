import React from "react";

export default function Textbox() {
  return (
    <div>
      <div className="form-floating">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea"
        ></textarea>
        <label htmlFor="floatingTextarea">Type here...</label>
      </div>
    </div>
  );
}
