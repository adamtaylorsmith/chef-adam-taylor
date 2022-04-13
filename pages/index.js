import Layout from '../components/Layout'
import { Grid, Container, Typography} from '@mui/material'
// import { useState } from 'react';
import classes from '../utils/classes'

export default function Home() {

    return (
        <>

            <Layout>
                <Container>

                </Container>
                    <Grid container>  
                        <Grid item xs={12}>
                            <Typography sx={classes.homePage}>
                                Chef Adam Taylor&#39;s Healthy Cuisine
                            </Typography> 
                        </Grid>
                   
                    </Grid>

            </Layout>; 
            
        </>
    )
}