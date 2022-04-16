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
                    <h1>Chef Adam&#39;s Healthy Cuisine</h1>
                    </Grid>
                
                    <Grid container>  
                        <Grid item xs={12} md={6}>
                            <Typography sx={classes.homePage}>
                                <br/>Specializing in health-supportive, nourishing, organic, seasonal, and local cuisine.
                            </Typography> 
                            <Typography sx={classes.homePageContent}>
                                I developed my skills at the following fine establishments:<br/><br/>
                                <a target="_blank" href="https://cafeflora.com/" rel="noopener noreferrer" style={{color: '#fcb762'}}>
                                Cafe Flora
                                </a> in Seattle, WA<br/>
                                <a target="_blank" href="https://www.holeinthewallgang.org/" rel="noopener noreferrer" style={{color: '#fcb762'}}>
                                Hole in the Wall Gang Camp
                                </a> in Ashford, CT <br/>
                                <a target="_blank" href="https://www.upress.umn.edu/book-division/books/the-cafe-brenda-cookbook" rel="noopener noreferrer" style={{color: '#fcb762'}}>
                                Cafe Brenda
                                </a> in Minneapolis, MN<br/>
                                <a target="_blank" href="https://www.ibj.com/articles/56946-mass-ave-farm-to-table-pioneer-r-bistro-to-close" rel="noopener noreferrer" style={{color: '#fcb762'}}>
                                R Bistro
                                </a> in Indianapolis, IN<br/>
                                <a target="_blank" href="https://greensrestaurant.com/" rel="noopener noreferrer" style={{color: '#fcb762'}}>
                                Greens
                                </a> in San Francisco, CA<br/>
                                <a target="_blank" href="https://www.ngihca.edu/" rel="noopener noreferrer" style={{color: '#fcb762'}}>
                                Natural Gourmet Institute
                                </a> in New York, NY<br/>
                            </Typography> 
                        </Grid>
                        <Grid md={1}>
                        </Grid> 
                        <Grid item xs={12} md={5} sx={classes.homePageImgCont}>
                        <figure>
                            <Image src="https://cdn.sanity.io/images/yx8hhiz1/production/faf3b38d7810fda041363145be384a3022fc5af2-1375x1750.png" width="366" height="466" alt="Adam during an Iron Chef event at Hole in the Wall Gang Camp in Ashford, CT" />
                            <figcaption>
                                <p>Adam during an Iron Chef event at Hole in the Wall Gang Camp in Ashford, CT</p>
                            </figcaption>
                        </figure> 
                        </Grid>
                        {/* https://cdn.sanity.io/images/yx8hhiz1/production/faf3b38d7810fda041363145be384a3022fc5af2-1375x1750.png */}
                        
                    </Grid>
                </Container>
            </Layout>; 
            
        </>
    )
}