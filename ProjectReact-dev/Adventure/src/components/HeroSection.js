import React from 'react';
import {Link} from 'react-router-dom';
import './Button.css';
import './HeroSection.css';

const HeroSection = () => {
    return (
    <div className="hero-container">
        <video src='/videos/video-1.mp4' autoPlay muted loop />
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div class="hero-btns">
            <Link to="/sign-up" className="btn-mobile">
                <button className="btn btn--outline btn--large">GET STARTED</button>
            </Link>
            <Link to="/sign-up" className="btn-mobile">
                <button className="btn btn--primary btn--large">
                    WATCH TRAILER
                    <i className="far fa-play-circle"></i>
                </button>
            </Link>
        </div>
    </div>
    )
    
}
export default HeroSection
