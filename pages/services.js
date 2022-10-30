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
      <p style={{fontSize: '1.1rem'}}></p>
      
      <p style={{fontSize: '1.2rem'}}>
      <span style={{fontWeight: '800'}}>I provide the following services:</span><br />
      Personally delivered meals to your home.<br />
      Event catering (for a maximum 50 guests).<br />
      Instructional culinary workshops (for a maximum 12 guests).<br />
      </p>
      <p style={{fontSize: '1.1rem'}}>I rent time at a local commercial kitchen. If my service includes pre-prepped food you can rest assured that everything will be prepared in an immaculately clean state-of-the-art kitchen.<br /><br />
      Contact me and tell me about your preferences and dietary restrictions.<br />
      I am especially excited about Italian, Japanese, Mexican, Vegan and Vegetarian cuisines.<br /><br />
      I specialize in dietary restrictions. I am currently a gluten-free low-acid pescatarian, I know all about dietary restrictions lol. Tell me all about your needs and preferences, and I can provide you with nourishing food and exceptional service.</p>
      

      
    </div>
  </Layout>;
}