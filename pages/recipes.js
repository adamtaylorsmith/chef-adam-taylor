import Layout from '../components/Layout';
import {
    Typography,
} from '@mui/material';

export default function Recipes() {
  

  return <Layout>
    <div style={{marginLeft: '4%', marginRight: '4%', marginTop: '40px'}}>
      <Typography component="h1" variant="h1">
          <div style={{fontWeight: '800'}}>Recipes Blog</div>
      </Typography>
      <p style={{fontSize: '1.2rem'}}>
        <span style={{fontWeight: '600'}}>https://www.tiktok.com/@chefadamtaylor</span> embed videos here...<br />
        <span style={{fontWeight: '600'}}>https://www.instagram.com/chefadamtaylor</span><br /><br />
        <span style={{fontSize: '1.1rem'}}>
        Upcoming free recipe &#35;1 - Steel Cut Oats with Brown Butter (developing and filming now)<br />Upcoming free recipe &#35;2 - Ultimate Yogurt Smoothie<br />Upcoming free recipe &#35;3 - Braised Kale
        </span>
        </p>
    </div>
  </Layout>;
}