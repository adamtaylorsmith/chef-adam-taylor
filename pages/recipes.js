import Layout from '../components/Layout';
import {
    Typography,
} from '@mui/material';

export default function Recipes() {
  

  return <Layout>
    <div style={{marginLeft: '4%', marginRight: '4%', marginTop: '30px'}}>
      <Typography component="h1" variant="h1">
          <div>Recipes Blog</div>
      </Typography>
      <p style={{}}>Embed my demostration TikTok videos here!<br /><br />Smoothie<br />Steel cut oats<br />#3 ??</p>
    </div>
  </Layout>;
}