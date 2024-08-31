import React, { useRef } from "react";
import Title from "./Title";
import TitleType from "./interface/Title_interface";

const H4 = (props: TitleType): JSX.Element => {
  const defaultProps = useRef({
    fontSize: "24",
    fontWeight: "400",
    level: "4",
  }).current;

  return <Title {...defaultProps} {...props} type={"h4"} />;
};

H4.defaultProps = {
  name: "H4",
};

export default H4;
