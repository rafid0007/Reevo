import React from 'react';
import CardStyles from './card.module.scss';

const Card = ({title,priceCurrent,imageUrls}) => {
    return (
        <div className={CardStyles.card}>
            <div className={CardStyles.imgContainer}>
                <img src={imageUrls[0]} alt="card photo"/>
            </div>
            {/*<Image src="/images/tee-1.jpg" height={'15rem'} width={'auto'} alt='card photo'/>*/} {/*Gonna use next-image*/}
            <div className={CardStyles.cardContent}>
                <h6>{title}</h6>
                <h5><span>৳</span> {priceCurrent}</h5>
            </div>
        </div>
    );
};

export default Card;