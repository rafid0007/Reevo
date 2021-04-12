import Grid from "@material-ui/core/Grid";

import {Button, Typography} from "@material-ui/core";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ShopTwoOutlinedIcon from '@material-ui/icons/ShopTwoOutlined';

import Layout from "../../components/layout/layout/layout";
import ProductDescList from "../../components/productPage/productDescList/productDescList";
import SelectComponent from "../../components/productPage/select/select";
import UserReview from "../../components/productPage/userReview/userReview";
import ImageGallery from "../../components/collectionPage/imageModal/imageGallery";
import ProductRating from "../../components/productPage/productRating/productRating";
import ProductPrice from "../../components/productPage/productPrice/productPrice";
import {data} from "../api/data";

import productStyles from './product.module.scss';

export const getStaticProps = async (context) => {
    const param = context.params.product;
    const product = data.filter(item => item.id === param)[0];

    return {
        props: {product},
        revalidate:2
    }
};

export const getStaticPaths = async () => {
    return {
        paths:[],
        fallback:true
    }
};

const Product = ({product}) => {
    return (
        <Layout>

            {/**************************** Product Image and description start *******************************/}
            <Grid container style={{backgroundColor:'white'}}>

                {/*************** Product Image Container **************/}
                <Grid item xs={12} md={6}>
                    <ImageGallery imgArr={product.imageUrls}/>      {/* Image Gallery Component */}
                </Grid>

                {/************* Product description Container ***********/}
                <Grid item xs={6} md={6}>
                    <div className={productStyles.desc}>
                        <Typography variant="h4">{product.title}</Typography>    {/* Product title */}
                        <ProductRating reviews={product.reviews}/>      {/* Product Rating(component) */}
                        <ProductDescList descriptions={product.descriptions}/>  {/*Product Bullet points(Component) */}
                        <ProductPrice price={product.priceCurrent} priceBefore={product.priceBefore}/>  {/* Product price(component) */}

                        {/****** Product purchase options Container *****/}
                        <div className={productStyles.selectContainer}>
                            <SelectComponent label='Quantity' initialValue={1} optionArray={[1,2,3,4,5]}/>
                            <SelectComponent label='Color' optionArray={product.colors}/>
                            <SelectComponent label='Size' optionArray={product.sizes}/>
                        </div>

                        {/***** Buttons Container ****/}
                        <div className={productStyles.buttonContainer}>
                            <Button
                                variant='contained'
                                color="secondary"
                                startIcon={<AddShoppingCartIcon/>}
                                style={{marginRight:'3rem'}}
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
        </Layout>
    );
};

export default Product;