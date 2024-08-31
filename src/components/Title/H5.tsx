import React, { useRef } from "react";
import Title from "./Title";
import TitleType from "./interface/Title_interface";

const H5 = (props: TitleType): JSX.Element => {
  const defaultProps = useRef({
    fontSize: "22",
    fontWeight: "500",
    level: "5",
  }).current;

  return <Title {...defaultProps} {...props} type={"h5"} />;
};

H5.defaultProps = {
  name: "H5",
};

export default H5;
