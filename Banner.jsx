// import React from "react";
import './Banner.css';
import "./Banner.scss";
import BannerImg from "../../../assets/waterman.png";

const Banner = () => {
    return (
        <section>
  <div class='air air1'></div>
  <div class='air air2'></div>
  <div class='air air3'></div>
  <div class='air air4'></div>

        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>BRINGING</h1>
                    <h1>BRINGING</h1>
                    <p className="para">
                        
                         Clean and Safe Water to Your SafeStep



                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Explore</div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} />
            </div>
            
        </div >
        </section>
    );
};

export default Banner;

