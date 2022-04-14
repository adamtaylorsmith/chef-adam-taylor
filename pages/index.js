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
                    <Grid container>  
                        <Grid item xs={12} md={4}>
                            <Typography sx={classes.homePage}>
                                Chef Adam&#39;s Healthy Cuisine
                            </Typography> 
                        </Grid> 
                        <Grid item xs={12} md={8}>
                            <Image src="/adam-hitwgc.png" alt="Adam during an Iron Chef event at Hole in the Wall Gang Camp in Ashford, CT" /> 
                        </Grid>
                        {/* https://cdn.sanity.io/images/yx8hhiz1/production/faf3b38d7810fda041363145be384a3022fc5af2-1375x1750.png */}
                    </Grid>
                </Container>
                <Container>
                    <Typography sx={classes.homePageContent}>
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
                </Container>
            </Layout>; 
            
        </>
    )
}