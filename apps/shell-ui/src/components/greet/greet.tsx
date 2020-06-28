import React from "react";

import "./greet.css";

/* eslint-disable-next-line */
export interface GreetProps {
  readonly greet: string;
}

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h1>Hello {props.greet}</h1>
    </div>
  );
};

export default Greet;
