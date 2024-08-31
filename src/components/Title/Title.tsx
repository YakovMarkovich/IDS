import React, { useMemo } from "react";
import {
  toCssClass,
  createDesignClassNameByProps,
  detectMediaProps,
  useDetectResizeScreen,
  getGlobalAttributes,
  getEventAttributes,
  getPositionAttributes,
  setOrderClassNames,
} from "../../sharedCode/helpers/helpers";
import styles from "./scss/Title.module.scss";
import TitleType from "./interface/Title_interface";
import mainStyles from "../../sharedCode/scss/main.module.scss";

const Title = (props: TitleType): JSX.Element => {
  
  //manage media props
  const currentScreenSize = useDetectResizeScreen();
  let cssForMediaQuery: string = useMemo(
    () => detectMediaProps(props?.[currentScreenSize]),
    [currentScreenSize]
  );

  const cssStyles = toCssClass([
    styles.title,
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

  const TagName: any = props?.type || "h2";
  const content = (
    <TagName
      {...globalAttributes}
      {...eventAttributes}
      className={setOrderClassNames(`${cssStyles} ${cssForMediaQuery}`)}
      style={position}
    >
      {props?.text}
    </TagName>
  );

  return !!props?.rowLimit ? <div>{content}</div> : content;
};

Title.defaultProps = {
  name: "Title",
};

export default Title;
