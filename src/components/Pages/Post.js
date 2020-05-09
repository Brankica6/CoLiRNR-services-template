import React, {Component} from 'react';
import { withRouter } from "react-router";
import Footer from '../Common/Footer.js';
import Jumbotron from '../Common/Jumbotron.js';
import img1 from '../../assets/images/bg1.jpg';
const postsData = require('../../Data/posts.js');


class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      imgUrl:'',
      description: '',
      date:''
    };
  }
  componentDidMount = () => {
    const id = this.props.match.params.slug;
    this.findPost(id);
  }
  findPost = (slug) => {
    postsData.post.map((p) => {
      if(p.slug === slug) {
        return this.setState({
          title: p.title,
          imgUrl:p.imgUrl,
          description:p.desc,
          date: p.date
        });
      } else {
        return false;
      }
     });
    };
    render(){
      return (
      <div>
        <Jumbotron image = {img1} title={this.state.title} description={''} page={'Post'}/>
        <section className="section-8">
    		   <div className="section-wrapper">
             <div className="row">
               <div className="col-lg-8">
                 <div className="blog-details">
                    <div className="post-image mb-5">
                        <img className="img-fluid" src={this.state.imgUrl} alt={this.state.title}/>
                    </div>
                    <h3>{this.state.title}</h3>
                    <div className="blog-meta">
                        <ul>
                            <li><i className="fas fa-user"></i> <a href="/">Admin</a></li>
                            <li><i className="far fa-clock"></i>{this.state.date} </li>
                            <li><i className="fas fa-folder-open"></i> <a href="/">Post</a></li>
                        </ul>
    						    </div>
      							<p>{this.state.description}</p>
      							<blockquote className="blockquote">
      								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      							</blockquote>
      							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      						</div>
               </div>
               <div className="col-lg-4">
                 <div className="sidebar">
                    <div className="widget widget_categories widget_links mt-5">
        								<h3 className="widget-title">
        									Categories
        								</h3>
        								<ul>
        									<li><a href="/">Item1</a></li>
        									<li><a href="/">Item2</a></li>
        									<li><a href="/">Item3</a></li>
        									<li><a href="/">Item4</a></li>
        									<li><a href="/">Item5</a></li>
        								</ul>
                    </div>

                    <div className="widget widget_tag_cloud mt-5">
      								<h3 className="widget-title">
      									Tags
      								</h3>
      								<div className="tagcloud">
      									<a href="/">Error</a>
      									<a href="/">Cake Bake</a>
      									<a href="/">Dromzone</a>
      									<a href="/">File</a>
      									<a href="/">Yii</a>
      									<a href="/">Yii2</a>
      								</div>
                    </div>
                  </div>
               </div>
             </div>
    		 	</div>
    		</section>
      <Footer/>
    </div>
  )}
}
export default withRouter(Post);
