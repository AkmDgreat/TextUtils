import React, { useState } from "react";

export default function Alert(props) {

  

  return (
    
      props.alerto && <div className={`alert alert-${props.alerto.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alerto.type}</strong>:{props.alerto.msg} {/* alerto is a state*/ }
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    
  );
}
