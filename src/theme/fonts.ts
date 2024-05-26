import { TextStyle } from "react-native";

const size = {
    xs: 10,
    default: 14,
    md: 16,
    sm: 12,
    lg: 20,
    xlg: 24,
    xxlg: 28,
    xxxlg: 32,

};
const weight : {[key: string]: TextStyle['fontWeight']}= {
    full: '900',
    bold: '700',
    semi: '600',
    normal: '400',
    thin: '300',
};

export default { size, weight };