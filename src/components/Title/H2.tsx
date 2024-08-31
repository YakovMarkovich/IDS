import React, { useRef } from "react";
import Title from "./Title";
import TitleType from "./interface/Title_interface";

const H2 = (props: TitleType): JSX.Element => {
  const defaultProps = useRef({
    fontSize: "35",
    fontWeight: "600",
    level: "2",
  }).current;

  return <Title {...defaultProps} {...props} type={"h1"} />;
};

H2.defaultProps = {
  name: "H2",
};

export default H2;
