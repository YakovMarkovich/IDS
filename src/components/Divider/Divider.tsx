import React, { useMemo } from "react";
import {
  toCssClass,
  createDesignClassNameByProps,
  detectMediaProps,
  useDetectResizeScreen,
  getGlobalAttributes,
  getEventAttributes,
} from "../../sharedCode/helpers/helpers";
import styles from "./scss/Divider.module.scss";
import DividerType from "./interface/Divider_interface";

const Divider = (props: DividerType): JSX.Element => {
  //manage media props
  const currentScreenSize = useDetectResizeScreen();
  let cssForMediaQuery: string = useMemo(
    () => detectMediaProps(props?.[currentScreenSize]),
    [currentScreenSize]
  );

  const cssStyles = toCssClass([
    styles.divider,
    props?.type ? styles[props?.type] : styles["Horizontal"],
    props?.thickness
      ? styles[`thickness-${props?.thickness}`]
      : styles["thickness-1"],
    props?.align ? styles[`divider-${props?.align}`] : styles["divider-center"],
    createDesignClassNameByProps(props),
    props?.className,
  ]);

  const globalAttributes = useMemo(() => {
    return getGlobalAttributes(props);
  }, [props?.id, props?.name, props?.testId, props?.attributes]);

  const eventAttributes = useMemo(() => {
    return getEventAttributes(props);
  }, [props?.onFocus, props?.onBlur, props?.onClick, props?.onKeyDown]);

  return (
    <hr
      {...globalAttributes}
      {...eventAttributes}
      className={`${cssStyles} ${cssForMediaQuery}`}
    />
  );
};

Divider.defaultProps = {
  name: "Divider",
};

export default Divider;
