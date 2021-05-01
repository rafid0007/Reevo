import React from 'react';
import Link from "next/link";
import Image from "next/image";

import CardStyles from './card.module.scss';

const Card = ({id,title,priceCurrent,imageUrls}) => {
    return (
        <Link href={`/products/${id}`}>
            <a>
                <div className={CardStyles.card}>
                    <div className={CardStyles.imgContainer} style={{ position:'relative' }}>
                        <img className={CardStyles.cardImage} src={imageUrls[0]} alt="card photo"/>
                        {/*<Image*/}
                        {/*    src={imageUrls[0]}*/}
                        {/*    className={CardStyles.cardImage}*/}
                        {/*    alt="card photo"*/}
                        {/*    layout='fixed'*/}
                        {/*    // objectFit='cover'*/}
                        {/*    height={'100%'}*/}
                        {/*    width={'100%'}*/}
                        {/*/>*/}
                    </div>

                    <div className={CardStyles.cardContent}>
                        <h6>{title}</h6>
                        <h5><span>৳</span> {priceCurrent}</h5>
                    </div>
                </div>
            </a>
        </Link>
    );
};

export default Card;