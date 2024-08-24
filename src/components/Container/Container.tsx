import React, { forwardRef, useMemo } from "react";
import styles from "./scss/Container.module.scss";
import ContainerInterface from "./interface/Container_interface";
import {
  createDesignClassNameByProps,
  detectMediaProps,
  toCssClass,
  useDetectResizeScreen,
  getEventAttributes,
  getGlobalAttributes,
  getSizeAttributes,
} from "../../sharedCode/helpers/helpers";

const Container = forwardRef(
  (props: ContainerInterface, forwardedRef: any): JSX.Element => {
    // manage media props
    const currentScreenSize = useDetectResizeScreen();
    let cssForMediaQuery: string = useMemo(
      () => detectMediaProps(props?.[currentScreenSize]),
      [currentScreenSize]
    );
    
    const cssStyles = toCssClass([
      styles.Container,
      // props?.scrollInMobile ? styles.scrollInMobile : '',
      props?.scrollByMedia ? styles?.[`scroll-${props?.scrollByMedia}`] : "",
      props?.className,
      createDesignClassNameByProps(props),
      props?.columns &&
        parseInt(props?.columns as string) > 1 &&
        styles[`col-${props?.columns}`],
    ]);

    const globalAttributes = useMemo(() => {
      return getGlobalAttributes(props);
    }, [props?.id, props?.name, props?.testId, props?.attributes]);

    const eventAttributes = useMemo(() => {
      return getEventAttributes(props);
    }, [props?.onFocus, props?.onBlur, props?.onClick, props?.onKeyDown]);

    const sizeAttributes = useMemo(() => {
      return getSizeAttributes(props);
    }, [
      props?.fixedMinWidth,
      props?.fixedMaxWidth,
      props?.fixedWidth,
      props?.fixedMinHeight,
      props?.fixedMaxHeight,
      props?.fixedHeight,
    ]);

    return (
      <div
        {...globalAttributes}
        {...eventAttributes}
        className={`${cssStyles} ${cssForMediaQuery}`}
        style={{ ...sizeAttributes, ...props?.style }}
        ref={forwardedRef}
      >
        {props.children}
      </div>
    );
  }
);

Container.defaultProps = {
  name: "Container",
  children: null,
};

export default Container;
