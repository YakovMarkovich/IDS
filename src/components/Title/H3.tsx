import React, { useRef } from "react";
import Title from "./Title";
import TitleType from "./interface/Title_interface";

const H3 = (props: TitleType): JSX.Element => {
  const defaultProps = useRef({
    fontSize: "28",
    fontWeight: "500",
    level: "3",
  }).current;

  return <Title {...defaultProps} {...props} type={"h3"} />;
};

H3.defaultProps = {
  name: "H3",
};

export default H3;
