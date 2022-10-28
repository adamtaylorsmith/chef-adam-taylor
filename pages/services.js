import Layout from '../components/Layout';
import {
    Typography,
} from '@mui/material';

export default function Services() {
  
  return <Layout>
    <div style={{marginLeft: '4%', marginRight: '4%', marginTop: '30px'}}>
      <Typography component="h1" variant="h1">
          <div>My Services</div>
      </Typography>
      <p style={{}}><span style={{fontWeight: '600'}}></span>I provide the following services:</p>
    </div>
  </Layout>;
}