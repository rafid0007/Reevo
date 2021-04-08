import NikeSvg from '../../public/images/Nike_logo.svg';
import SvgIcon from "@material-ui/core/SvgIcon";
import {useRouter} from "next/router";
import Link from 'next/link';

const NikeLogo = (props) => {
    return (
        <Link href={'/'}>
            <a>
                <SvgIcon component={NikeSvg} style={{fontSize: 80, cursor: 'pointer'}} viewBox="-100 -114 400 300"/>
            </a>
        </Link>
)};

export default NikeLogo;