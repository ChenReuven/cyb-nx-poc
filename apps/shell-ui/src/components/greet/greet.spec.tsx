import React from "react";
import { render } from "@testing-library/react";

import Greet from "./greet";

describe(" Greet", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Greet greet="World" />);
    expect(baseElement).toBeTruthy();
  });
});
