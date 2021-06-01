import React from "react";
import Link from "next/link";
import Image from "next/image";
import {useStyles} from './Logo.styles';
import PropTypes from 'prop-types'

const Logo = ({height = 50, width= 50, imageUrl}) => {
    const classes = useStyles();
  return (
    <div className={`${classes.logoBox} ${classes.toolbar}`}>
      <Link href="/">
        <a>
          <Image src={imageUrl} height={height} width={width} />
        </a>
      </Link>
    </div>
  );
};

Logo.propTypes = {
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imageUrl: PropTypes.string.isRequired
}

export default Logo;