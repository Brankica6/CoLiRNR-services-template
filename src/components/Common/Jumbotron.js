import React, {Component} from 'react';

class Jumbtron extends Component {

  render() {
    return (
      <section className="section-jumbotron" style={{backgroundImage: `url(${this.props.image})`}}>
        <div className="wrapper-content bg_layout_dark">
          <div className="section-wrapper">
            <div className="row">
              <div className="col-md-9">
              <h1>{this.props.title}
                <span className="title-shadow">{this.props.title}</span>
              </h1>
              <p>{this.props.description}</p>
              </div>
              <div className="col-md-3 ml-auto align-self-end">
              <ul className="page-breadcrumbs text-right">
                <li><a href="/">Home </a></li>
               <li> {this.props.page} </li> </ul>
             </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Jumbtron;
