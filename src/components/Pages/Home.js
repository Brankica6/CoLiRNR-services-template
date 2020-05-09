import React, {Component} from 'react';
import img1 from '../../assets/images/bg6.jpg';
import img2 from '../../assets/images/bg5.jpg';
import Services from '../Common/Services.js';
import Testimonials from '../Common/Testimonials.js';
import Footer from '../Common/Footer.js';
import Fade from 'react-reveal/Fade';

class Home extends Component {

  render() {
    return (
      <div>
      <section className="section-0">
        <div className="parallax_bg_wrap">
          <div className="parallax_bg" style={{backgroundImage: `url(${img1})`}}>
          </div>
        </div>
        <div className="wrapper-content ptb-128 bg_layout_dark">
          <div className="content container">
            <div className="row justify-content-center">
              <Fade left cascade>
                <h1>Management System</h1>
              </Fade>
              <Fade left cascade>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
              </Fade>
            </div>
          </div>
        </div>
      </section>
      <Services/>
      <section className="section-4">
        <div className="parallax_bg_wrap">
          <div className="parallax_bg" style={{backgroundImage: `url(${img2})`}}>
          </div>
        </div>
        <div className="wrapper-content bg_layout_dark">
          <div className="content section-wrapper">
            <div className="row">
              <div className="col-md-6">
                <h2>We Create Fully Connected Systems So You Can Focus On Your Business</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
                <div className="button-wrapper-1">
                  <a href="/">get started</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonials/>
      <Footer/>
      </div>
    )
  }
}

export default Home;
