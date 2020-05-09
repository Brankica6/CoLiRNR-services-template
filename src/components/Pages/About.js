import React, {Component} from 'react';
import img1 from '../../assets/images/aboutbg.jpg';
import img2 from '../../assets/images/bg3.jpg';
import Jumbotron from '../Common/Jumbotron.js';
import Footer from '../Common/Footer.js';
import Services from '../Common/Services.js';
class About extends Component {

  render() {
    return (
      <div>
      <Jumbotron image= {img1} title={'About us'} description={'Cupidatat non proident sunt culpa qui officia deserunt mollit '} page={'About'}/>
      <section id="o-nama" className="section-3">
        <div className="section-wrapper">
          <div className="row">
            <div className="col-md-6 pr-3">
              <p>Approach</p>
              <h2>Professional IT Services & Technology Consulting</h2>
              <div className="text-inner">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco</p>
              </div>
              <div className="button-wrapper">
                <a href="/">learn more!</a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="image-wrapper">
                <img className="img-responsive" src={img2} alt='about'/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Services/>
      <section className="section-3">
        <div className="section-wrapper">
        <h2 className="text-center"> Why choose us</h2>
          <div className="row pt-5">
            <div className="col-md-6 pr-5">
              <div className="text-inner">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco</p>
              </div>
            </div>
            <div className="col-md-6">
            <div className="text-inner">
               <ul className="why-choose">
                <li>Lorem Ipsum Dolor</li>
                <li>Amet Sit Consecteture Lorem</li>
                <li>Consectetur Adipiscing Elit.</li>
                <li>Pellentesque In Ipsum Id Orci Porta Dapibus.</li>
                <li>Sed Porttitor Lectus Nibh</li>
               </ul>
            </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
      </div>
    )
  }
}

export default About;
