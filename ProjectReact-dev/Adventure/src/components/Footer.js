import React from 'react';
import './Footer.css';
import './Button.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <button className="btn--outline">Subscribe</button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/sign-up'>Testimonials</Link>
            <Link to='/sign-up'>Careers</Link>
            <Link to='/sign-up'>Investors</Link>
            <Link to='/sign-up'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/sign-up'>Contact</Link>
            <Link to='/sign-up'>Support</Link>
            <Link to='/sign-up'>Destinations</Link>
            <Link to='/sign-up'>Sponsorships</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/sign-up'>Submit Video</Link>
            <Link to='/sign-up'>Ambassadors</Link>
            <Link to='/sign-up'>Agency</Link>
            <Link to='/sign-up'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/sign-up'>Instagram</Link>
            <Link to='/sign-up'>Facebook</Link>
            <Link to='/sign-up'>Youtube</Link>
            <Link to='/sign-up'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <div className='social-logo'>
                DK 
                <i class="fas fa-heart"></i>
            </div>
          </div>
          <small class='website-rights'>DK  © 2020</small>
          <div class='social-icons'>
              <i class='social-icon-link fab fa-facebook-f' />
              <i class='social-icon-link fab fa-instagram' />
              <i class='social-icon-link fab fa-youtube' />
              <i class='social-icon-link fab fa-twitter' />
              <i class='social-icon-link fab fa-linkedin' />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
