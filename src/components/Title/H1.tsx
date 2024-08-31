import React, { useRef } from "react";
import Title from "./Title";
import TitleType from "./interface/Title_interface";

const H1 = (props: TitleType): JSX.Element => {
  
  const defaultProps = useRef({
    fontSize: "43",
    fontWeight: "500",
    level: "1",
  }).current;

  return <Title {...defaultProps} {...props} type={"h1"} />;
};

H1.defaultProps = {
  name: "H1",
};

export default H1;
