export default interface AllowedChildrenObjectInterface {
    /** name of child component */
    name?: string;
    /** set default props for child component, these props, can be overriden by developer or other codes */
    default?: object;
    /** set fixed props for child component, these props can NOT be overriden by developer or other codes */
    override?: string;
    /** you can set default props of children */
    propsFromParent?: string;

}