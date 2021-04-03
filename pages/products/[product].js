import Grid from "@material-ui/core/Grid";
import {Button, Typography} from "@material-ui/core";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ShopTwoOutlinedIcon from '@material-ui/icons/ShopTwoOutlined';

import Layout from "../../components/layout/layout";
import ProductDescList from "../../components/productDescList/productDescList";

import productStyles from './product.module.scss';
import SelectComponent from "../../components/select/select";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import UserReview from "../../components/userReview/userReview";

const Product = () => {
    return (
        <Layout>

            {/**************************** Product Image and description start *******************************/}

            <Grid container style={{backgroundColor:'white'}}>

                {/*************** Product Image Container **************/}

                <Grid item xs={12} md={6}>
                    <div className= {productStyles.imgContainer}>
                        <img src="https://i.ibb.co/zscCfcm/black-tee-1.png" alt="product"/>
                    </div>
                </Grid>

                {/************* Product description Container ***********/}

                <Grid item xs={6} md={6}>

                    <div className={productStyles.desc}>

                        {/****** Product title *****/}

                        <Typography variant="h4">
                            Black Tee Shirt with 100% Cotton fiber
                        </Typography>

                        {/****** Product rating *****/}

                        <div className={productStyles.ratingContainer}>
                            <Box component="fieldset" mr={1} borderColor="transparent">
                                <Rating
                                  name="totalRating"
                                  size="small"
                                  precision={0.1}
                                  value={3.5}
                                  readOnly
                                />
                            </Box>
                            <a href="#reviews">
                                <Typography>34 ratings</Typography>
                            </a>
                        </div>

                        {/****** Product Bullet points Container *****/}

                        <div className={productStyles.descList}>
                            {
                                descList.map((item,i)=>(
                                    <ProductDescList key={i} item={item}/>
                                ))
                            }
                        </div>

                        {/******* Product price Container ******/}

                        <div >
                            <div className={productStyles.priceBefore}>
                                <span style={{}}>৳ </span > <span>350.00</span>
                            </div>
                            <div className={productStyles.priceNow}>
                                <span style={{fontSize:'1.8rem',fontWeight:400}}>৳ </span > <span>500.00</span>
                            </div>
                        </div>

                        {/****** Product purchase options Container *****/}

                        <div className={productStyles.selectContainer}>
                            <SelectComponent label='Quantity' initialValue={1} optionArray={[1,2,3,4,5]}/>
                            <SelectComponent
                                label='Color'
                                initialValue='black'
                                optionArray={['black','red','blue']}
                            />
                            <SelectComponent
                                label='Size'
                                initialValue='L'
                                optionArray={['S','M','L','X','XL','XXL']}
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

                <div className={productStyles.detailsContainer}>
                    <Typography variant="h5" style={{fontWeight:500}}>Product Details</Typography>
                    <Typography variant="body2" style={{marginTop:'3rem'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid animi consequuntur distinctio dolor dolore dolores est fugiat hic, illum inventore ipsum magnam maxime, molestiae mollitia placeat quam, quos ratione sit vitae. Ab alias asperiores aut blanditiis consequatur eius explicabo harum ipsa nam nisi nostrum possimus praesentium quia, quisquam quo quos repellat reprehenderit suscipit ullam ut.</Typography>
                </div>

            {/***************************************** Product Details End ******************************/}

            {/**************************************** Product review start ******************************/}

            <div id='reviews' className={productStyles.reviewContainer}>
                <Typography
                    variant={"h5"}
                    style={{fontWeight:500,marginBottom:'3rem'}}
                >
                    Product Reviews
                </Typography>

                {
                    reviews.map((item, i) => (
                        <UserReview key={i} review={item}/>
                    ))
                }

            </div>

            {/***************************************** Product review End *********************************/}

        </Layout>
    );
};

export default Product;

const descList = [
    {key:"PRODUCT ID",value:'01'},
    {key:'STATUS',value:'Available'},
    {key:'MATERIAL',value:'Cotton'},
    {key:'BRAND',value:'Yellow'}
    ];

const reviews = [
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
];