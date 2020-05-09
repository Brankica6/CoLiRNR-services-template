import React, {Component} from 'react';
import Slide from 'react-reveal/Slide';

class ServiceItem extends Component {

  render() {
    return (
      <Slide bottom duration= {2000}>
         <div className="col-md-4">
           <div className={`card-wrapper ${this.props.bgColor}`}>
             <div className="card-content text-center text-white">
               <div className="card-icon">
                 <span className="icon"><i className={`fas ${this.props.icon} fa-5x`}></i></span>
               </div>
               <div className="card-text">
                 <h4>{this.props.title}</h4>
                 <p>{this.props.desc}</p>
               </div>
             </div>
           </div>
         </div>
       </Slide>
    )
  }
}

export default ServiceItem;
