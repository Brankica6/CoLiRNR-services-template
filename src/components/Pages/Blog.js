import React, {Component} from 'react';
import Jumbotron from '../Common/Jumbotron.js';
import Footer from '../Common/Footer.js';
import BlogItem from '../Common/BlogItem.js';
import img1 from '../../assets/images/bg1.jpg';

const postsData = require('../../Data/posts.js');

class Blog extends Component {
  render() {
    return (
      <div>
     <Jumbotron image = {img1} title={'Blog'} description={'Get in touch'} page={'Contact'}/>
     <section id="#blog" className="section-8">
  			<div className="section-wrapper">
  				<div className="row">
            {postsData.post.map((item, index)=>{
              return <BlogItem {...item} link = {"/post/" + item.slug}key={index}/>
            })}
              <div className="col-lg-12 col-md-12">
                  <div className="pagination-area">
                      <nav aria-label="Page navigation">
                          <ul className="pagination justify-content-center">
                              <li className="page-item"><a className="page-link" href="/"><i className="fas fa-angle-double-left"></i></a></li>
                              <li className="page-item"><a className="page-link active" href="/">1</a></li>
                              <li className="page-item"><a className="page-link" href="/"><i className="fas fa-angle-double-right"></i></a></li>
                          </ul>
                      </nav>
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

export default Blog;
