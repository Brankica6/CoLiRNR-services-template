import React, {Component} from 'react';
import Slide from 'react-reveal/Slide';

class Testimonials extends Component {

  render() {
    return (
      <section id="iskustva-korisnika" className="section-6">
        <div className="section-wrapper">
          <div className="row pb-5 pt-5">
            <div className="col text-center">
              <p>Testimonials</p>
              <h2>What People Are Saying</h2>
            </div>
          </div>

          <div className="row d-flex justify-content-between">
          <Slide bottom duration= {2000}>
            <div className="col-md-6">
              <div className="quote"><i className="fas fa-quote-left text-white"></i></div>
              <div className="testimonial-wrapper bg-blue">
                <div className="testimonial-content text-center text-white">
                  <div className="testimonial-text">
                    <p className="text-white">Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <span className="testimonial-author">Adeline West</span>
                  </div>
                </div>
              </div>
            </div>
            </Slide>
          <Slide bottom duration= {2000}>
            <div className="col-md-6">
              <div className="testimonial-wrapper bg-gray">
                <div className="quote"><i className="fas fa-quote-left text-gray"></i></div>
                <div className="testimonial-content text-center text-dark">
                  <div className="testimonial-text">
                    <p className="text-dark">Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <span className="testimonial-author">Adeline West</span>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
          <Slide bottom duration= {2000}>
            <div className="col-md-6">
              <div className="quote"><i className="fas fa-quote-left text-gray"></i></div>
              <div className="testimonial-wrapper bg-gray">
                <div className="testimonial-content text-center text-dark">
                  <div className="testimonial-text">
                    <p className="text-dark">Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <span className="testimonial-author">Adeline West</span>
                  </div>
                </div>
              </div>
            </div>
            </Slide>
            <Slide bottom duration= {2000}>
              <div className="col-md-6">
                <div className="testimonial-wrapper bg-dark-blue">
                  <div className="quote"><i className="fas fa-quote-left text-white"></i></div>
                  <div className="testimonial-content text-center text-white">
                    <div className="testimonial-text">
                      <p className="text-white">Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      <span className="testimonial-author">Adeline West</span>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
          </div>
        </div>
      </section>
    )
  }
}

export default Testimonials;
