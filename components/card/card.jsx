import React from 'react';
import CardStyles from './card.module.scss';

const Card = ({productName,productPriceRate,productImageUrl}) => {
    return (
        <div className={CardStyles.card}>
            <img src={productImageUrl} alt="card photo"/>
            {/*<Image src="/images/tee-1.jpg" height={'15rem'} width={'auto'} alt='card photo'/>*/} {/*Gonna use next-image*/}
            <div className={CardStyles.cardContent}>
                <h6>{productName}</h6>
                <h5><span>৳</span> {productPriceRate}</h5>
            </div>
        </div>
    );
};

export default Card;