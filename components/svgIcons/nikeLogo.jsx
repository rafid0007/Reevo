import NikeSvg from '../../public/images/Nike_logo.svg';
import SvgIcon from "@material-ui/core/SvgIcon";

const NikeLogo = (props) => (
    <SvgIcon component={NikeSvg} style={{fontSize: 80}} viewBox="-100 -114 400 300"/>
);

export default NikeLogo;