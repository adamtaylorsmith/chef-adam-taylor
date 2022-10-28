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
      <p style={{}}><span style={{fontWeight: '600'}}>https://www.tiktok.com/@chefadamtaylor</span>: embed video here...<br /><br />Brunch Recipe #1 - Ultimate Yogurt Smoothie<br />Brunch Recipe #2 - Steel Cut Oats with Brown Butter<br />Brunch Recipe #3 - Bloody Mary</p>
    </div>
  </Layout>;
}