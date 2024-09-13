import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  createDesignClassNameByProps,
  toCssClass,
  detectMediaProps,
  useDetectResizeScreen,
  getPositionAttributes,
  getGlobalAttributes,
  getEventAttributes,
  isHTMLFormat,
} from "../../sharedCode/helpers/helpers";
import RichTextType from "./interface/RichText_interface";
import styles from "../RichText/scss/RichText.module.scss";
import mainStyles from "../../sharedCode/scss/main.module.scss";
import Container from "../Container/Container";

const RichText = (props: RichTextType): JSX.Element => {
  const [isWrapperReady, setIsWrapperReady] = useState<boolean>(false);
  const ref = useRef<any>(null);

  const errorMessages = useRef({
    invalid: "קוד HTML לא תקין",
    notHTML: "נא להעביר תוכן בפורמט HTML",
    notFoundStrHTMLProps: "הprops לא הועבר לרכיב או הוא רק",
  }).current;

  // manage media props
  const currentScreenSize = useDetectResizeScreen();
  let cssForMediaQuery: string = useMemo(
    () => detectMediaProps(props?.[currentScreenSize]),
    [currentScreenSize]
  );

  const htmlValidation = (str: string) => {
    const strForValidation = str.toLowerCase();
    if (
      strForValidation.indexOf("<script") > -1 ||
      strForValidation.indexOf("&lt;script") > -1
    )
      return false;
    let parser = new DOMParser();
    let doc = parser.parseFromString(strForValidation, "application/xml");
    return !doc.querySelector("parsererror");
  };

  useEffect(() => {
    console.log("in useeffect");
    
    if (ref?.current) {
      if (!isHTMLFormat(props?.strHTML)) {
        ref.current.innerHTML = errorMessages.notHTML;
      } else if (!htmlValidation(`<div>${props?.strHTML}</div>`)) {
        ref.current.innerHTML = errorMessages.invalid;
      } else {
        ref.current.innerHTML = props?.strHTML;
      }
    }
  }, [props?.strHTML, isWrapperReady]);

  const cssStyles = toCssClass([
    styles.RichText,
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

  const outPutHtml = (
    <div
      {...globalAttributes}
      {...eventAttributes}
      className={`${cssStyles} ${cssForMediaQuery}`}
      ref={(r: any) => {
        ref.current = r;
        setIsWrapperReady(true);
      }}
      style={position}
    ></div>
  );

  return (
    !!props?.strHTML ? (!!props?.rowLimit ? <div>{outPutHtml}</div> : outPutHtml) : <div data-testid={props?.testId}>{errorMessages.notFoundStrHTMLProps}</div>
  )
};

RichText.defaultProps = {
  name: "RichText",
};

export default RichText;
