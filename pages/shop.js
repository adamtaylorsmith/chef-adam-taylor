import { Alert, CircularProgress, Grid, Typography } from '@mui/material';
import axios from 'axios';
// import { useRouter } from 'next/router';
// import { useSnackbar } from 'notistack';
import { useContext, useEffect, useState } from 'react';
import Layout from '../components/Layout';
import ProductItem from '../components/ProductItem';
import client from '../utils/client';
import { urlForThumbnail } from '../utils/image';
import { Store } from '../utils/Store';
// import classes from '../utils/classes'

export default function Home() {
  const {
    state: { cart },
    dispatch,
  } = useContext(Store);
const [state, setState] = useState({
  products: [],
  error: '',
  loading: true
})
const {loading, error, products} = state
  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await client.fetch(`*[_type == "product"]`)
        setState({products, loading: false})
      } catch(err) {
        setState({loading: false, error: err.message})
      }
    }
    fetchData()
  }, [])

  const addToCartHandler = async (product) => {
    const existItem = cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock < quantity) {
        alert('Sorry. Product is out of stock')
    //   enqueueSnackbar('Sorry. Product is out of stock', { variant: 'error' });
      return;
    }
    dispatch({
      type: 'CART_ADD_ITEM',
      payload: {
        _key: product._id,
        name: product.name,
        countInStock: product.countInStock,
        slug: product.slug.current,
        price: product.price,
        image: urlForThumbnail(product.image),
        quantity,
      },
    });
    alert(`${product.name} added to the cart`)
    // enqueueSnackbar(`${product.name} added to the cart`, {
    //   variant: 'success',
    // });
    // router.push('/cart');
  };

  return <Layout>
    {loading? (<CircularProgress />)
    : error? (<Alert variant="danger">{error}</Alert>)
    : <>
    <div style={{marginLeft: '4%', marginRight: '4%', marginTop: '40px'}}>
    <Typography component="h2" variant="h2">
            <div style={{fontWeight: '800'}}>Shop</div>
        </Typography>
      <Grid container>
        <Typography>
          <span style={{fontSize: '1.1rem'}}>
          I have applied for membership at a local commercial kitchen co-op. As soon as I can secure a regulated and licensed kitchen this page will include meals-to-go in the Indianapolis metro area plus packaged and canned goods ready to ship anywhere! <br/>
          Prepared with the cleanest, freshest, highest-quality produce and ingredients available.<br />
          Online shopping is currently only available in the  
            <span style={{fontWeight: '700'}}> Indianapolis, Indiana</span> area.
          
          </span></Typography>
      </Grid><br /><br />
      <Grid container spacing={5} display="flex" justifyContent="center">
        {products.map((product) => (
          <Grid item md={4} key={product.slug}>
            <ProductItem
                product={product}
                addToCartHandler={addToCartHandler}
              ></ProductItem>
          </Grid>
        ))}
      </Grid>
    </div>
      <br/>
    </>
    
    }
  </Layout>;
}