import {useRef} from 'react';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Card from '../../common/Card'

import styles from './productsHorizontalScroll.module.scss';

const ProductsHorizontalScroll = ({title, itemsArr}) => {

    const navRef = useRef();

    const handleNav = (direction) => {
        if (direction === 'left') {
          navRef.current.scrollLeft -= 200 ;
        } else {
          navRef.current.scrollLeft += 200 ;
        }
      };

    return (
        <div className={styles.wrapper}>
             <div className={styles.heading}>
                <h2>{title}</h2>
                <div className={styles.navigations}>
                  <h4>See All &nbsp;</h4>
                  <ArrowBackIosIcon style={{ fontSize: 14, cursor: 'pointer'}} onClick={()=>handleNav('left')} />
                  <ArrowForwardIosIcon style={{ fontSize: 14,  cursor: 'pointer'}} onClick={()=>handleNav('right')} />
                </div>
            </div>
            <div className={styles.productsSliderContainer}>
                <div className={styles.productsSlider} ref={navRef}>
                    {
                        itemsArr.map((item, i) => <Card key={i} {...item} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductsHorizontalScroll;