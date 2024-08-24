import React, { useMemo } from "react";
import {
  toCssClass,
  getLowerCase,
  createDesignClassNameByProps,
  detectMediaProps,
  useDetectResizeScreen,
  getGlobalAttributes,
  getEventAttributes,
  getPositionAttributes,
} from "../../sharedCode/helpers/helpers";
import styles from "./scss/Text.module.scss";
import TextType from "./interface/Text_interface";
import mainStyles from "../../sharedCode/scss/main.module.scss";

const Text = (props: TextType): JSX.Element => {
  //manage media props
  const currentScreenSize = useDetectResizeScreen();
  let cssForMediaQuery: string = useMemo(
    () => detectMediaProps(props?.[currentScreenSize]),
    [currentScreenSize]
  );

  const cssStyles = toCssClass([
    styles.text,
    props?.showEllipsis && mainStyles.showEllipsis,
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

  const TagName: any = props?.type || "span";
  const content = (
    <TagName
      {...globalAttributes}
      {...eventAttributes}
      className={`${cssStyles} ${cssForMediaQuery}`}
      style={position}
    >
      {props?.text}
    </TagName>
  );

  if (getLowerCase(TagName) === "plaintext") {
    return <>{props?.text}</>;
  } else {
    return !!props?.rowLimit ? <div>{content}</div> : content;
  }
};

Text.defaultProps = {
  name: "Text",
};

export default Text;
