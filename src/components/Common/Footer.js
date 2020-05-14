import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Footer extends Component {

  render() {
    return (
      <div>
      <footer className="footer-area">
        <div className="section-wrapper">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="single-footer-widget">
                <h3 className="color-white">Head Office</h3>
                <span className="color-red">info@domain.com</span>
                <p><i className="icofont-google-map"></i> 201 Toma 27
Hs, Serbia</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="single-footer-widget">
                <h3 className="color-white">Quick Links</h3>
                <ul className="quick-links">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/About">Aboute</Link></li>
                  <li><Link to="/Blog">Blog</Link></li>
                  <li><Link to="/Contact">Contact</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-4">
              <div className="single-footer-widget">
                <h3 className="color-white">Social Connection</h3>
                <p>Don't miss a thing! Receive daily news You should connect social area for Any Proper Updates Anytime.</p>

                <ul className="social-links">
                  <li><a href="https://www.facebook.com/" rel="noopener noreferrer" className="facebook" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="https://www.twitter.com/" rel="noopener noreferrer" className="twitter" target="_blank"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="https://www.linkedin.com/" rel="noopener noreferrer" className="linkedin" target="_blank"><i className="fab fa-linkedin"></i></a></li>
                  <li><a href="https://www.instagram.com/" rel="noopener noreferrer" className="instagram" target="_blank"><i className="fab fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="copyright-area">
                <div className="logo text-right">
                <p>© 2020 Copyright Text</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </div>
    )
  }
}

export default Footer;
