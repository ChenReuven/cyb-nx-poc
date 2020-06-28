import React from "react";

import "./test.css";

/* eslint-disable-next-line */
export interface TestProps {
  title?: string;
  subtitle?: string;
}

export const Test = (props: TestProps) => {
  return (
    <div>
      <h1>Welcome to test 2!</h1>
      <h2>{props.title}</h2>
      <h3>{props.subtitle}</h3>
    </div>
  );
};

export default Test;
