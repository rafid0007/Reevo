import React, {useContext} from "react";
import Grid from "@material-ui/core/Grid";

import {Button, Typography} from "@material-ui/core";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ShopTwoOutlinedIcon from '@material-ui/icons/ShopTwoOutlined';

import ProductDescList from "./productDescList/productDescList";
import CustomSelect from "../common/CustomSelect";
import UserReview from "./userReview/userReview";
import ImageGallery from "../CategoryPage/imageModal/imageGallery";
import ProductRating from "./productRating/productRating";
import ProductPrice from "./productPrice/productPrice";
import {CartContext} from "../../providers/Cart";
import productStyles from './ProductPage.module.scss';


const ProductPage = ({product}) => {
    const {id, title, priceCurrent, imageUrls} = product;
    const {addItem} = useContext(CartContext);
    // console.log('cartItems:', cartItems);
    return (
        <>

            {/**************************** Product Image and description start *******************************/}
            <Grid container style={{backgroundColor:'white'}} >

                {/*************** Product Image Container **************/}
                <Grid item xs={12} md={6}>
                    <ImageGallery imgArr={product.imageUrls}/>      {/* Image Gallery Component */}
                </Grid>

                {/************* Product description Container ***********/}
                <Grid item xs={6}>
                    <div className={productStyles.desc}>
                        <Typography variant="h4">{product.title}</Typography>    {/* Product title */}
                        <ProductRating reviews={product.reviews}/>      {/* Product Rating(component) */}
                        <ProductDescList descriptions={product.descriptions}/>  {/*Product Bullet points(Component) */}
                        <ProductPrice price={product.priceCurrent} priceBefore={product.priceBefore}/>  {/* Product price(component) */}

                        {/****** Product purchase options Container *****/}
                        <div className={productStyles.selectContainer}>
                            <CustomSelect label='Quantity' initialValue={1} optionArray={[1,2,3,4,5]}/>
                            <CustomSelect label='Color' optionArray={product.colors}/>
                            <CustomSelect label='Size' optionArray={product.sizes}/>
                        </div>

                        {/***** Buttons Container ****/}
                        <div className={productStyles.buttonContainer}>
                            <Button
                                variant='contained'
                                color="secondary"
                                startIcon={<AddShoppingCartIcon/>}
                                style={{marginRight:'3rem'}}
                                onClick={() => addItem({id, name: title, price: priceCurrent, imageUrl: imageUrls[0]})}
                            >
                                ADD TO CART
                            </Button>
                            <Button
                                variant='contained'
                                color="secondary"
                                startIcon={<ShopTwoOutlinedIcon/>}
                            >
                                BUY NOW
                            </Button>
                        </div>
                    </div>
                </Grid>
            </Grid>
            {/******************************** Product Image and description End ***************************/}


            {/***************************************** Product Details start ******************************/}
            <section className={productStyles.detailsContainer}>
                <Typography variant="h5" style={{fontWeight:500}}>Product Details</Typography>
                <Typography variant="body2" style={{marginTop:'3rem'}}>{product.details}</Typography>
            </section>
            {/***************************************** Product Details End ******************************/}


            {/**************************************** Product review start ******************************/}
            <section id='reviews' className={productStyles.reviewContainer}>
                <Typography
                    variant={"h5"}
                    style={{fontWeight:500,marginBottom:'3rem'}}
                >
                    Product Reviews
                </Typography>

                {/*********** User Review component **********/}
                {
                    product.reviews.map((item, i) => (
                        <UserReview key={i} review={item}/>
                    ))
                }
            </section>
            {/***************************************** Product review End *********************************/}
        </>
    );
};

export default ProductPage;