import { ReactNode } from "react";

/** Interface for components with empty tag / React.Fragment
   <>{children}</> or <React.Fragment>{children}</React.Fragment>
  */

export default interface EmptyTagInterface {
  children?: ReactNode;
  name?: string;
}
