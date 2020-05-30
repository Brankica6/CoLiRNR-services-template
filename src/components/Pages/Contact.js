import React, {Component} from 'react';
import Jumbotron from '../Common/Jumbotron.js';
import Footer from '../Common/Footer.js';
import img1 from '../../assets/images/contactbg.jpg';
import {withFormik} from 'formik';
import * as Yup from 'yup';

class Contact extends Component {
  render() {
    return (
      <div>
     <Jumbotron image = {img1} title={'Contact'} description={'Get in touch'} page={'Contact'}/>
      <section id="kontakt" className="section-8">
        <div className="section-wrapper">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-3">
                <div className="contact-wrapper bg-gray text-dark">
                    <div className="icon text-center">
                        <i className="fas fa-phone fa-3x"></i>
                    </div>
                    <div className="contact-content">
                        <h4>Phone / Fax</h4>
                        <p><a href="tel:00000">+381 (0)70 311 555</a></p>

                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-3">
                <div className="contact-wrapper bg-gray text-dark">
                    <div className="icon text-center">
                        <i className="fas fa-envelope-square fa-3x"></i>
                    </div>

                    <div className="contact-content">
                        <h4>E-mail</h4>
                        <p><a href="mailto:info@domain.com" className="text-dark">info@domain.com</a></p>

                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-3">
                <div className="contact-wrapper bg-gray text-dark">
                    <div className="icon text-center">
                        <i className="fas fa-globe-europe fa-3x"></i>
                    </div>
                    <div className="contact-content">
                        <h4>Location</h4>
                        <p>201 Toma 27 Hs, Serbia</p>
                    </div>
                </div>
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-md-8">
              <h2>Contact Us!</h2>
              <div>
                <form onSubmit= {this.props.handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="name">name</label><br/>
                      <span className="name"><input value={this.props.values.name}
                       type="text"
                       id="name"
                       placeholder="Name"
                       required="required"
                       data-validation-required-message="Please enter your name."
                       name="name"
                       onChange={this.props.handleChange}
                       onBlur={this.props.handleBlur}
                       errors={this.props.errors.name}
                       /></span>
                       <p className="help-block text-error">
                       {(this.props.touched.name && this.props.errors.name) &&
                         <span>{this.props.errors.name}</span>
                       }
                       </p><br/>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email">Email adresa</label><br/>
                      <span className="email"><input value={this.props.values.email}
                       type="email"
                       name="email"
                       placeholder="Email address"
                       required="required"
                       data-validation-required-message="Please enter your email."
                       onChange={this.props.handleChange}
                       onBlur={this.props.handleBlur}
                       errors={this.props.errors.email}
                       /></span><p className="help-block text-error">
                       {(this.props.touched.email && this.props.errors.email) &&
                         <span>{this.props.errors.email}</span>
                       }
                       </p><br/>
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="message">Unesite poruku</label><br/>
                      <span className="message"><textarea value={this.props.values.message}
                      name="message"
                      placeholder="Message"
                      required="required"
                      data-validation-required-message="Please enter your message."
                      onChange={this.props.handleChange}
                      onBlur={this.props.handleBlur}
                      errors={this.props.errors.message}
                      /></span><p className="help-block text-error">
                      {(this.props.touched.message && this.props.errors.message) &&
                        <span>{this.props.errors.message}</span>
                      }
                      </p>
                    </div>
                    <div className="col-md-12">
                      <button type="submit" value="Posalji" className="submit">Send</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 pt-5">
              <div className="leave-your-message">
                <h3>Leave Your Message</h3>
                <p>If you have any questions about the services we provide simply use the Form below. We try and respond to all queries and comments within 24 hours.</p>
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

export default withFormik({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    message: '',
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string().required('You must give us your name!'),
    email: Yup.string().email('You need to give us a valid email').required('We need your email'),
    message: Yup.string()
      .min(300,'You need to provide us more detailed.')
      .required('Message is required'),
  }),
  handleSubmit: (values, {setSubmitting}) => {
    alert("You've submitted the Form", JSON.stringify(values));
  }
})(Contact);
