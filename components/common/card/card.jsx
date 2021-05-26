import React from 'react';
import Link from "next/link";
import Image from "next/image";

import CardStyles from './card.module.scss';

const Card = ({id,title,priceCurrent,imageUrls}) => {
    return (
        <Link href={`/products/${id}`}>
            <a>
                <div className={CardStyles.card}>
                    <div className={CardStyles.imgContainer}>
                        <Image src={imageUrls[0]} alt="card photo" layout='fill' objectFit='contain'/>
                        {/*<div style={{ position: 'relative', width: '100%', height: '100%'}}>*/}
                        {/*    <Image src={imageUrls[0]} alt={title} layout='fill'/>*/}
                        {/*</div>*/}
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