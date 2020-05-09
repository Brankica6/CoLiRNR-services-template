import React, {Component} from 'react';
import { Link } from "react-router-dom";


class BlogItem extends Component {

  render() {
    return (
      <div className="col-lg-4 col-md-6">
        <div className="single-blog-post">
          <div className="blog-image">
            <Link to={this.props.link}><img src={this.props.imgUrl} alt={this.props.title}/></Link>
            <div className="post-tag">
              <Link to="/">Home</Link>
            </div>
          </div>
          <div className="blog-post-content text-left">
            <span className="date color-green">{this.props.date}</span>
            <h3><Link to={this.props.link}>{this.props.title}</Link></h3>
            <p>{this.props.desc}</p>
            <Link to={this.props.link} className="read-more-btn">Read More <i className="fas fa-angle-double-right"></i></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default BlogItem;
