import React  from "react";
import mainStyles from "./../scss/main.module.scss";
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
export const shortId = (): string => `ID_${Math.random().toString(36).slice(-10)}`;

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

// detect Media styles
export const detectMediaProps = (mediaProps?: any): string => {
  if (mediaProps) {
    // @ts-ignore
    const resultOfClassNames = Object.entries(mediaProps).map(v => mainStyles[`${v[0]}-${v[1]}`]);
    return toCssClass(resultOfClassNames);
  }
  return '';
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
