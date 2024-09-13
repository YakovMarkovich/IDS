import React, { useMemo } from "react";
import ImageType from "./interface/Image_interface";
import styles from "./scss/Image.module.scss";
import {
  createDesignClassNameByProps,
  toCssClass,
  useDetectResizeScreen,
  detectMediaProps,
  getPositionAttributes,
  getGlobalAttributes,
  getEventAttributes,
} from "../../sharedCode/helpers/helpers";

const Image = (props: ImageType): JSX.Element => {
  //manage media props
  const currentScreenSize = useDetectResizeScreen();
  let cssForMediaQuery: string = useMemo(
    () => detectMediaProps(props?.[currentScreenSize]),
    [currentScreenSize]
  );

  const cssStyles = toCssClass([
    styles.image,
    props?.className,
    props?.nested && styles.nested,
    props?.noMaxWidth && styles.noMaxWidth,
    props?.backgroundImage && styles.hasBackgroundImage,
    !!props?.size?.toLowerCase() ? styles[`max-size-${props.size}`] : styles["max-size-xxl"],
    createDesignClassNameByProps(props),
    
  ]);

  console.log(cssStyles);
  

  const globalAttributes = useMemo(() => {
    return getGlobalAttributes(props);
  }, [props?.id, props?.name, props?.testId, props?.attributes]);

  const eventAttributes = useMemo(() => {
    return getEventAttributes(props);
  }, [props?.onFocus, props?.onBlur, props?.onClick, props?.onKeyDown]);

  // set width for SVG files
  const setImgWidth = props?.fixedWidth ? {width: props.fixedWidth} : {};
  const setWrapperWidth = props?.wrapperWidth ? {width: '100%', maxWidth: props.wrapperWidth} : {};
  const setWrapperHeight = props?.wrapperHeight ? {height: '100vh', maxHeight: props.wrapperHeight} : {};

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

 const bgImage = props?.backgroundImage ? {backgroundImage: `url(${props?.backgroundImage})`} : {};


  return (
    <div
      {...globalAttributes}
      {...eventAttributes}
      className={`${cssStyles} ${cssForMediaQuery}`}
      style={{...setWrapperWidth, ...setWrapperHeight,  ...position, ...bgImage}}
    >
        <img
            style={setImgWidth}
            src={props?.src || ''}
            alt={props?.alt || ''}
        />
    </div>
  );
};

Image.defaultProps = {
    name: 'Image',
}

export default Image;

