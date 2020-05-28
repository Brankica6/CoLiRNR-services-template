import React, {Component} from 'react';
import { Link } from "react-router-dom";
import Footer from '../Common/Footer.js';
import Jumbotron from '../Common/Jumbotron.js';
import img1 from '../../assets/images/bg1.jpg';
const postsData = require('../../Data/posts.js');


class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      currentSlug: ''
    };
  }
  componentDidMount = () => {
    const slug = this.props.match.params.slug;
    const result = postsData.post.filter(post => {
      return post.slug === slug;
    })
    return {
      posts: result[0],
      currentSlug: slug,
    }
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
   if (nextProps.match.params.slug !== prevState.currentSlug){
     const currentSlug = nextProps.match.params.slug
     const result = postsData.post.filter(obj => {
       return obj.slug === currentSlug;
     })
     return {
      posts: result[0],
      currentSlug: currentSlug,
   }
 }
   return null;
}


  render(){
    const {imgUrl, title, date, description} = this.state.posts;
    return (
      <div>
        <Jumbotron image = {img1} title={title} description={''} page={'Post'}/>
        <section className="section-8">
      	   <div className="section-wrapper">
             <div className="row">
               <div className="col-lg-8">
                 <div className="blog-details">
                    <div className="post-image mb-5">
                        <img className="img-fluid" src={imgUrl} alt={this.state.title}/>
                    </div>
                    <h3>{title}</h3>
                    <div className="blog-meta">
                        <ul>
                            <li><i className="fas fa-user"></i> <a href="/">Admin</a></li>
                            <li><i className="far fa-clock"></i>{date} </li>
                            <li><i className="fas fa-folder-open"></i> <a href="/">Post</a></li>
                        </ul>
      					    </div>
      							<p>{description}</p>
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
                    <div className="widget widget_recent_entries mt-5">
        								<h3 className="widget-title">
        									Recent Posts
        								</h3>
        								<ul>
                        { postsData.post.slice(0,4).map((p,index) => {
                          return <li key={index}>
                										<Link className="img-link" to={`/post/${p.slug}`}>
                											<img src= {p.imgUrl} alt={p.title}/>
                										</Link>
                                    <div>
                  										<Link to={{pathname:`/post/${p.slug}`}}>{p.title}</Link>
                  										<p className="date">{p.date}</p>
                                    </div>
      									            </li>
                        })}
        								</ul>
                    </div>

                    <div className="widget widget_tag_cloud mt-5">
      								<h3 className="widget-title">
      									Tags
      								</h3>
      								<div className="tagcloud">
                        <ul>
        									<li>Error</li>
        									<li>Post</li>
        									<li>Zip</li>
        									<li>File</li>
        									<li>Yii</li>
        									<li>Yii2</li>
                        </ul>
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

export default Post;
