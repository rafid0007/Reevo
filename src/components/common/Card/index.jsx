import Link from "next/link";
import Image from "next/image";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor: "#fff",
    borderRadius: 3,
    boxShadow: "none",
    "&:hover": {
      boxShadow: "0.5rem 1rem 2rem rgba(0,0,0, 0.1)",
    },
  },
  cardMedia: {
    padding: "10px",
  },
  title: {
    fontSize: "1.4rem",
    fontWeight: 500,
  },
  price: {
    fontSize: "1.6rem",
    fontWeight: 600,
  },
});

const CustomCard = ({ id, title, priceCurrent, imageUrls }) => {
  const classes = useStyles();
  return (
    <Link href={`/products/${id}`}>
      <a>
        {" "}
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.cardMedia}>
              <div
                style={{ position: "relative", width: "100%", height: "220px" }}
              >
                <Image
                  src={imageUrls[0]}
                  alt={title}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </CardMedia>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                align="center"
                className={classes.title}
              >
                {title}
              </Typography>
              <Typography
                variant="h6"
                component="p"
                align="center"
                className={classes.price}
              >
                ${priceCurrent}.00
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </a>
    </Link>
  );
};

export default CustomCard;







// import React from 'react';
// import Link from "next/link";
// import Image from "next/image";
//
// import CardStyles from './card.module.scss';
//
// const Card = ({id,title,priceCurrent,imageUrls}) => {
//     return (
//         <Link href={`/products/${id}`}>
//             <a>
//                 <div className={CardStyles.card}>
//                     <div className={CardStyles.imgContainer}>
//                         <Image src={imageUrls[0]} alt="card photo" layout='fill' objectFit='contain'/>
//                     </div>
//
//                     <div className={CardStyles.cardContent}>
//                         <h6>{title}</h6>
//                         <h5><span>৳</span> {priceCurrent}</h5>
//                     </div>
//                 </div>
//             </a>
//         </Link>
//     );
// };
//
// export default Card;
