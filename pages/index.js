import Layout from '../components/Layout'
import { Grid, Container, Typography } from '@mui/material'
// import { useState } from 'react';
import classes from '../utils/classes'
import Image from 'next/image'

export default function Home() {

    return (
        <>
            <Layout>
            
                <Container>
                    <Grid container spacing={1} display="flex" justifyContent="center">
                    <h2 style={{color: '#333'}}>Chef Adam&#39;s Healthy Cuisine</h2>
                    </Grid>
                
                    <Grid container>  
                        <Grid item xs={12} md={6}>
                            <Typography sx={classes.homePage}>
                                <br /><span style={{fontSize: '1.3rem'}}>I will help you fall in love with healthy food!</span><br /><span style={{fontSize: '1.1rem'}}>Seasonal, local, farm-to-table cuisine.</span>
                            </Typography> 
                            <Typography sx={classes.homePageExtra}>
                                My skills were developed at the following fine establishments: 
                            </Typography> 
                            <Typography sx={classes.homePageContent}>
                                <a target="_blank" href="https://cafeflora.com/" rel="noopener noreferrer" style={{color: '#5e76f9', fontWeight: 'bold'}}>
                                Cafe Flora
                                </a> in Seattle, WA<br/>
                                <a target="_blank" href="https://www.holeinthewallgang.org/" rel="noopener noreferrer" style={{color: '#5e76f9', fontWeight: 'bold'}}>
                                The Hole in the Wall Gang Camp
                                </a> in Ashford, CT <br/>
                                <a target="_blank" href="https://www.upress.umn.edu/book-division/books/the-cafe-brenda-cookbook" rel="noopener noreferrer" style={{color: '#5e76f9', fontWeight: 'bold'}}>
                                Cafe Brenda
                                </a> in Minneapolis, MN<br/>
                                <a target="_blank" href="https://www.ibj.com/articles/56946-mass-ave-farm-to-table-pioneer-r-bistro-to-close" rel="noopener noreferrer" style={{color: '#5e76f9', fontWeight: 'bold'}}>
                                R Bistro
                                </a> in Indianapolis, IN<br/>
                                <a target="_blank" href="https://greensrestaurant.com/" rel="noopener noreferrer" style={{color: '#5e76f9', fontWeight: 'bold'}}>
                                Greens
                                </a> in San Francisco, CA<br/>
                                <a target="_blank" href="https://www.ngihca.edu/" rel="noopener noreferrer" style={{color: '#5e76f9', fontWeight: 'bold'}}>
                                Natural Gourmet Institute
                                </a> in New York, NY<br/>
                            </Typography> 
                        </Grid>
                        <Grid md={1}>
                        </Grid> 
                        <Grid item xs={12} md={5} sx={classes.homePageImgCont}>
                        <figure>
                            <Image src="https://cdn.sanity.io/images/yx8hhiz1/production/faf3b38d7810fda041363145be384a3022fc5af2-1375x1750.png" width="255" height="325" alt="Adam during an Iron Chef event at Hole in the Wall Gang Camp in Ashford, CT" />
                            <figcaption>
                                <p style={{fontSize: '14px'}}>Adam as Iron Chef, 2007.<br/>
                                {/* <span style={{fontWeight: "bold"}}>The Hole in the Wall Gang Camp</span> */}
                                The Hole in the Wall Gang Camp
                                <br/>Ashford, Connecticut</p>
                            </figcaption>
                        </figure> 
                        </Grid>
                        {/* https://cdn.sanity.io/images/yx8hhiz1/production/faf3b38d7810fda041363145be384a3022fc5af2-1375x1750.png */}
                        
                    </Grid>
                </Container>
                {/* <Container>
                    <Typography sx={classes.special}>
                    Fully-cooked, reheat-and-serve meals. Menu is personalized to your tastes and dietary preferences. 
                    I will shop for your fresh produce at farmers markets. I will buy your ingredients at local health food stores such as Good Earth and Georgetown Market.
                    Whether Margarita Mix or Lasagna, your food and drinks will be prepared using the freshest, cleanest and highest-quality ingredients imaginable. All items will be prepared around any preference or dietary restriction.
                    Specializing in fresh, local, seasonal, nutrient dish, low fat and delicious.
                    All orders will be delivered to your front door on one of two days, Sundays and Fridays.
                    I am passionate about nutrition and cleanliness.
                    </Typography>
                </Container> */}
            </Layout>; 
            
        </>
    )
}