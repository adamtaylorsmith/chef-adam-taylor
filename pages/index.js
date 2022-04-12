import Layout from '../components/Layout'
import { Grid, Container} from '@mui/material'
// import { useState } from 'react';

export default function Home() {

    return (
        <>

            <Layout>
                <Container>

                </Container>
                    <Grid container>  
                        <Grid item xs={12} style={{fontSize: '16px'}}>
                            Details about me and other shit no one wants to know
                        </Grid>
                        <Grid item xs={10} style={{fontSize: '20px', fontWeight:'bold'}} display="flex" justifyContent="center">
                            Resume ipsum loren kappa cheddar
                        </Grid>
                    </Grid>

            </Layout>; 
            
        </>
    )
}