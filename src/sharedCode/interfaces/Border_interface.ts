export default interface borderInterface {
    /** shadow className */
    shadow?: '0' | '100' | '200' | '300' | string;
    /** border classname */
    border?: '0' | 'transparent' | '100' | string;
    /** round corner (border-radius) className */
    borderRadius?: string;
    /** border color */
    borderColor?: 'primary-0' | 'primary-50' | 'primary-100' | 'primary-150' | 'primary-250' | 'primary-500' | 'primary-600' | 'primary-700' | 'primary-800' | 'secondary-200' | 'secondary-300' | 'secondary-400' | 'secondary-500' | 'secondary-600' | 'secondary-700'| string;
}