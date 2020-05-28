import React, {Component} from 'react';
import Jumbotron from '../Common/Jumbotron.js';
import Footer from '../Common/Footer.js';
import BlogItem from '../Common/BlogItem.js';
import { Link } from "react-router-dom";
import img1 from '../../assets/images/bg1.jpg';

const postsData = require('../../Data/posts.js');

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
        posts:[],
        currentPage: 1,
        postsPerPage: 6,
        pageNumbers: []
    }
  }
  componentDidMount = () => {
    const totalPosts = postsData.post.length;
    let pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / this.state.postsPerPage); i++) {
      pageNumbers.push(i);
    }
     this.setState({
     posts: postsData.post,
     pageNumbers: pageNumbers
   })
  }

  paginate = (pageNum) => {
    return this.setState({currentPage:pageNum,});
  }

  nextPage = () => {
    if(this.state.currentPage !== this.state.pageNumbers[this.state.pageNumbers.length-1] ){
      this.setState({currentPage: this.state.currentPage + 1})
    } else {
      return false;
    }
  }
  prevPage = () => {
    if(this.state.currentPage !== 1) {
      this.setState({ currentPage: this.state.currentPage - 1 });
    } else {
      return false;
    }
  }

  render() {
    const {posts, currentPage, postsPerPage, pageNumbers} = this.state;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    return (
      <div>
     <Jumbotron image = {img1} title={'Blog'} description={'Get in touch'} page={'Blog'}/>
     <section id="#blog" className="section-8">
  			<div className="section-wrapper">
  				<div className="row">
            {currentPosts.map((item, index)=>{
              return <BlogItem {...item} link = {"/post/" + item.slug}key={index}/>
            })}
              <div className="col-lg-12 col-md-12">
                  <div className="pagination-area">
                      <nav aria-label="Page navigation">
                          <ul className="pagination justify-content-center">
                              <li className="page-item"><Link className="page-link" to="/blog" onClick={() => this.prevPage()}><i className="fas fa-angle-double-left"></i></Link></li>
                              {pageNumbers.map(num => {
                              return <li className="page-item" key={num}><Link className={currentPage===num?'page-link active':'page-link'} to="/blog" onClick={() => this.paginate(num)}>{num}</Link></li>
                            })}
                              <li className="page-item"><Link className="page-link" to="/blog" onClick={() => this.nextPage()} ><i className="fas fa-angle-double-right"></i></Link></li>
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
