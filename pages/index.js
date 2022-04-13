import Layout from '../components/Layout'
import { Grid, Container, Typography, Link} from '@mui/material'
// import { useState } from 'react';
import classes from '../utils/classes'
import NextLink from 'next/link'

export default function Home() {

    function changeBackground(e) {
        e.target.style.color = 'blue';
      }

    return (
        <>

            <Layout>
                <Container>
                    <Grid container>  
                        <Grid item xs={12}>
                            <Typography sx={classes.homePage}>
                                Chef Adam&#39;s Healthy Cuisine
                            </Typography> 
                        </Grid>
                    </Grid>
                </Container>
                <Container>
                    <Typography sx={classes.homePageContent}>
                        <NextLink passHref href="https://cafeflora.com/" >
                            <a rel="noopener noreferrer" target="_blank" sx={classes.outsideLink}>Cafe Flora</a> 
                        </NextLink> in Seattle, WA<br/>
                        <NextLink href="https://www.holeinthewallgang.org/" passHref rel="noreferrer" target="_blank">
                            <a onMouseOver={changeBackground}>The Hole in the Wall Gang Camp</a> 
                        </NextLink> in Ashford, CT <br/>
                        <NextLink href="https://www.upress.umn.edu/book-division/books/the-cafe-brenda-cookbook" passHref rel="noreferrer" target="_blank">
                            <Link>Cafe Brenda</Link> 
                        </NextLink> in Minneapolis, MN<br/>
                        <NextLink href="https://www.ibj.com/articles/56946-mass-ave-farm-to-table-pioneer-r-bistro-to-close" passHref rel="noreferrer" target="_blank">
                            <Link>R Bistro</Link> 
                        </NextLink> in Indianapolis, IN<br/>
                        <NextLink href="https://greensrestaurant.com/" passHref rel="noreferrer" target="_blank">
                            <Link>Greens</Link> 
                        </NextLink> in San Francisco, CA<br/>
                        Culinary Arts at the <NextLink href="https://www.ngihca.edu/" passHref rel="noreferrer" target="_blank">
                            <Link>Natural Gourmet Institute</Link> 
                        </NextLink> in New York, NY<br/>
                    </Typography> 
                </Container>
            </Layout>; 
            
        </>
    )
}