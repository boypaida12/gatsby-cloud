/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function TextBody({ imgSrc, heading, paragraph }) {
  return (
    <>
      <div className="d-flex gap-2 w-75">
        <img src={imgSrc} alt="" className="align-self-start" />
        <div>
          <h2 className="fw-bold" style={{fontSize: "18px"}}>{heading}</h2>
          <p className="text-muted">
            <small>{paragraph}</small>
          </p>
        </div>
      </div>
    </>
  );
}

export default TextBody;
