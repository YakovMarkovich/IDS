import React, { useEffect, useMemo, useState } from "react";
import IconType from "./interface/Icon_interface";
import styles from "./scss/Icon.module.scss";
import fontNames from "./../../sharedCode/scss/fonticons.module.scss";
import {
  createDesignClassNameByProps,
  toCssClass,
  useDetectResizeScreen,
  detectMediaProps,
  getPositionAttributes,
  getGlobalAttributes,
  getEventAttributes,
} from "../../sharedCode/helpers/helpers";

const Icon = (props: IconType): JSX.Element => {
  //manage media props
  const currentScreenSize = useDetectResizeScreen();
  let cssForMediaQuery: string = useMemo(
    () => detectMediaProps(props?.[currentScreenSize]),
    [currentScreenSize]
  );

  const cssStyles = toCssClass([
    styles.icon,
    props?.size ? styles[props.size] : styles["M"],
    props.disabled && styles.disabled,
    fontNames[props?.icon ?? ""],
    createDesignClassNameByProps(props),
    props?.className,
  ]);

  const globalAttributes = useMemo(() => {
    return getGlobalAttributes(props);
  }, [props?.id, props?.name, props?.testId, props?.attributes]);

  const eventAttributes = useMemo(() => {
    return getEventAttributes(props);
  }, [props?.onFocus, props?.onBlur, props?.onClick, props?.onKeyDown]);

  const position = useMemo(
    () => getPositionAttributes(props),
    [
      props?.position,
      props?.top,
      props?.left,
      props?.right,
      props?.bottom,
      props?.centerX,
      props?.centerY,
    ]
  );

  return (
    <i
      {...globalAttributes}
      {...eventAttributes}
      className={`${cssStyles} ${cssForMediaQuery}`}
      style={position}
    />
  );
};

Icon.displayName = "Icon";
Icon.defaultProps = {
  name: "Icon",
};
export default Icon;
