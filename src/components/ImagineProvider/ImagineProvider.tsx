import  { useEffect, useMemo, useState } from "react";
import styles from "./scss/ImagineProvider.module.scss";
import ImagineProviderType from "./interface/ImagineProvider_interface";
import {
  toCssClass,
  createDesignClassNameByProps,
  useDetectResizeScreen,
  detectMediaProps,shortId
} from "../../sharedCode/helpers/helpers";

const ImagineProvider = (props: ImagineProviderType): JSX.Element => {
  const [height, setHeight] = useState(
    props.height ? { minHeight: 0, height: props.height } : null
  );

  // manage media props
  const currentScreenSize = useDetectResizeScreen();
  let cssForMediaQuery: string = useMemo(()=> detectMediaProps(props?.[currentScreenSize]), [currentScreenSize])

  const cssStyles = toCssClass([
    styles.imagineProvider,
    createDesignClassNameByProps(props),
    props?.className,
  ]);

  const imagineProviderProps = useMemo(() => {
    return {
      "data-name": props?.name,
      "data-testid": props?.testId,
      id: props?.id || shortId(),
      onResize: props?.onResize,
      onError: props?.onError,
      onLoad: props?.onLoad,
    };
  }, [
    props?.name,
    props?.testId,
    props?.id,
    props?.onResize,
    props?.onError,
    props?.onLoad,
  ]);

  useEffect(() => {
    props?.onBeforeunload &&
      document
        .getElementsByTagName("body")[0]
        .addEventListener("beforeunload", props.onBeforeunload);
    props?.onUnload &&
      document
        .getElementsByTagName("body")[0]
        .addEventListener("unload", props.onUnload);
    props?.onOnline &&
      document
        .getElementsByTagName("body")[0]
        .addEventListener("online", props.onOnline);
    props?.onOffline &&
      document
        .getElementsByTagName("body")[0]
        .addEventListener("offline", props.onOffline);
  }, []);

  useEffect(() => {
    setHeight(props.height ? { minHeight: 0, height: props.height } : null);
  }, [props?.height]);

  return (
    <div
      className={"imaginePage"}
      id={"imaginePage"}
      style={{ ...height, ...props?.style }}
    >
      <div
        {...imagineProviderProps}
        className={`${cssStyles} ${cssForMediaQuery}`}
        style={{ ...height, ...props?.style }}
      >
        {props.children}
      </div>
    </div>
  );
};

ImagineProvider.defaultProps = {
  name: "ImagineProvider",
  children: <></>,
};

export default ImagineProvider;
