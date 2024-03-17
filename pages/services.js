import Layout from '../components/Layout';
import {
    Typography,
} from '@mui/material';

export default function Services() {
  
  return <Layout>
    <div style={{marginLeft: '4%', marginRight: '6%', marginTop: '40px'}}>
      <Typography component="h1" variant="h1">
          <div style={{fontWeight: '800'}}>My Services</div>
      </Typography>
      
      <p style={{fontSize: '1.1rem'}}>
      <span style={{fontWeight: '600'}}>I provide the following services:</span><br />
      Personally delivered meals to your home.<br />
      Event catering (for a maximum 50 guests).<br />
      Instructional culinary workshops.<br />
      </p>
      <p style={{fontSize: '1.1rem'}}>I specialize in dietary restrictions, tell me about yours.<br /><br />
      I can provide you with nourishing food and exceptional service. I am especially excited about Italian, Japanese, Mexican, Vegan and Vegetarian cuisines, but my skill set does not stop there.</p>
      <div><br />
          <form action="https://formspree.io/f/xwkrzokr" method="POST">
                <div>
                    Your email address:<br/>
                    <input type="email" name="reply"></input>
                </div>
                <div>
                    Your message:<br/>
                    <textarea name="message"></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
      </div>
      {/* <br/> */}
    </div>
  </Layout>;
}