import Grid from "@material-ui/core/Grid";
import {Button, Typography} from "@material-ui/core";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ShopTwoOutlinedIcon from '@material-ui/icons/ShopTwoOutlined';

import Layout from "../../components/layout/layout/layout";
import ProductDescList from "../../components/productPage/productDescList/productDescList";

import productStyles from './product.module.scss';
import SelectComponent from "../../components/productPage/select/select";
import UserReview from "../../components/productPage/userReview/userReview";
import ImageGallery from "../../components/collectionPage/imageModal/imageGallery";
import ProductRating from "../../components/productPage/productRating/productRating";
import ProductPrice from "../../components/productPage/productPrice/productPrice";


const product = {
    id: "1",
    title: "Black T-Shirt with 100% cotton fiber",
    descriptions: [
        {key:"PRODUCT ID",value:'01'},
        {key:'MATERIAL',value:'Cotton'},
        {key:'BRAND',value:'Yellow'},
        {key:"Gender",value: "male"}
        ],
    details:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid animi consequuntur distinctio dolor dolore dolores est fugiat hic, illum inventore ipsum magnam maxime, molestiae mollitia placeat quam, quos ratione sit vitae. Ab alias asperiores aut blanditiis consequatur eius explicabo harum ipsa nam nisi nostrum possimus praesentium quia, quisquam quo quos repellat reprehenderit suscipit ullam utpak.' ,
    priceCurrent: 500,
    priceBefore: 350,
    available: true,
    categories: ["category1", "category2", "category3"],
    imageUrls: [
        "https://i.ibb.co/zscCfcm/black-tee-1.png",
        "https://i.ibb.co/7kznZ8g/white-tee-2.jpg",
        "https://i.ibb.co/hdjbbSC/grey-tee-1.png"
    ],
    reviews: [
        {
            user: 'Gonu Molla',
            rating: 2,
            date: '3 April 2021',
            userReview: 'This product is disfunctional just like me.'
        },
        {
            user: 'Tanvir',
            rating: 5,
            date: '5 April 2021',
            userReview: 'Long lasting.'
        },
        {
            user: 'Arko',
            rating: 4,
            date: '13 April 2021',
            userReview: 'Feels good.'
        }
    ],
    sizes: ['S','M','L','XL','XXL'],
    colors: ['Black','White','Blue','Pink']

};

const Product = () => {

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

                            <SelectComponent
                                label='Quantity
                                ' initialValue={1}
                                optionArray={[1,2,3,4,5]}
                            />

                            <SelectComponent
                                label='Color'
                                optionArray={product.colors}
                            />

                            <SelectComponent
                                label='Size'
                                optionArray={product.sizes}
                            />
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

                {/****************** User Review component *******************/}

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