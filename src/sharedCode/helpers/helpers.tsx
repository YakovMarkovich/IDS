import React from "react";
import mainStyles from "./../scss/main.module.scss";
import { transform } from "@babel/core";
// import breakpoints from "./../scss/breakpoints.module.scss";

const designPropsArray: string[] = [
  "shadow",
  "border",
  "borderRadius",
  "padding",
  "paddingTop",
  "paddingBottom",
  "paddingRight",
  "paddingLeft",
  "margin",
  "marginTop",
  "marginBottom",
  "marginRight",
  "marginLeft",
  "marginCenter",
  "background",
  "color",
  "gap",
  "gapCol",
  "gapRow",
  "flexDirection",
  "justifyContent",
  "alignItems",
  "className",
  "direction",
  "fontSize",
  "fontWeight",
  "width",
  "rowLimit",
  "textAlign",
  "maxWidth",
  "borderColor",
  "innerShadow",
];

/** merge ClassNames */
export const toCssClass = (arr: any[]): string =>
  arr.filter((item, index) => arr.indexOf(item) === index).join(" ");

/** Generate unique id */
export const shortId = (): string =>
  `ID_${Math.random().toString(36).slice(-10)}`;

/** create design class name by props */
export const createDesignClassNameByProps = (props: any) => {
  const a = [];
  for (const v of Object.entries(props)) {
    if (designPropsArray.includes(v[0]) && v[1]) {
      //@ts-ignore
      a.push(mainStyles[`${v[0]}-${v[1]}`]);
    }
  }
  return a.join(" ");
};

/** convert string to lower case and time */
export const getLowerCase = (string: string | null | undefined): string => {
  return string?.toLowerCase()?.trim() || "";
};

// detect Media styles
export const detectMediaProps = (mediaProps?: any): string => {
  if (mediaProps) {
    // @ts-ignore
    const resultOfClassNames = Object.entries(mediaProps).map(
      (v) => mainStyles[`${v[0]}-${v[1]}`]
    );
    return toCssClass(resultOfClassNames);
  }
  return "";
};

// detect resize screen
export const useDetectResizeScreen = (): string => {
  const breakPointsByMaxPixel: any[] = React.useMemo(
    () => [
      // Pay attention: indexes start from big to small size
      { mediaQuery: "xxl", minSize: 1400 },
      { mediaQuery: "xl", minSize: 1200 },
      { mediaQuery: "lg", minSize: 992 },
      { mediaQuery: "md", minSize: 768 },
      { mediaQuery: "sm", minSize: 575 },
      { mediaQuery: "xs", minSize: 0 },
    ],
    []
  );

  const [currentScreenSize, setCurrentScreenSize] =
    React.useState<string>("xs");

  React.useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      const x = breakPointsByMaxPixel.find(
        (v: any) => entries[0].contentRect.width >= v.minSize
      );
      setCurrentScreenSize(x?.mediaQuery || "xs");
    });
    const bodyElement = document.querySelector("body");
    bodyElement && resizeObserver.observe(bodyElement);
  }, []);

  return currentScreenSize;
};

/** Get events attributes to element */
export const getEventAttributes = (props: any): any => {
  return {
    onFocus: props?.onFocus,
    onBlur: props?.onBlur,
    onClick: props?.onClick,
    onKeyDown: props?.onKeyDown,
    onKeyUp: props?.onKeyUp,
    onChange: props?.onChange,
  };
};

/** Get global attributes*/
export const getGlobalAttributes = (props: any): any => {
  return {
    id: props?.id || shortId(),
    "data-name": props?.name,
    "data-testid": props?.testId,
    "data-hrl-bo": props?.testId,
    ...props?.attributes,
  };
};

/** Get object of css position attributes */
export const getPositionAttributes = (props: any) => {
  const xAxis = props?.centerX
    ? { left: "50%", transform: "translateX(-50%)" }
    : { left: props?.left, right: props?.right };
  const yAxis = props?.centerY
    ? { top: "50%", transform: "translateY(-50%)" }
    : { top: props?.top, bottom: props?.bottom };

  if (props?.centerX && props?.centerY) {
    yAxis.transform = "translate(-50%, -50%)";
  }

  return {
    position: props?.position,
    ...xAxis,
    ...yAxis,
  };
};

/** Get object of css size attributes */
export const getSizeAttributes = (props: any) => {
  return {
    width: props?.fixedWidth,
    minWidth: props?.fixedMinWidth,
    maxWidth: props?.fixedMaxWidth,
    height: props?.fixedHeight,
    minHeight: props?.fixedMinHeight,
    maxHeight: props?.fixedMaxHeight,
  };
};
