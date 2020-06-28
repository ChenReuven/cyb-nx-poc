import React from "react";
import { Test, TestProps } from "./test";

export default {
  component: Test,
  title: "Test",
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: TestProps = {};
  const title = "Hello";
  const subtitle = "World";

  return <Test title={title} subtitle={subtitle} />;
};
