import React, {Component} from 'react';
import ServiceItem from './ServiceItem.js';

const services = [
  {title: 'Laptop Repair / Desktop Repair',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
  icon: 'fa-tools',
  bgColor: 'bg-orange'
  },
  {title: 'Virus and Spyware Removal',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
  icon: 'fa-life-ring',
  bgColor: 'bg-gray'
  },
  {title: 'Data Recovery and Backup Plan',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
  icon: 'fa-layer-group',
  bgColor: 'bg-blue'
  },
  {title: 'Network Design',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
  icon: 'fa-globe',
  bgColor: 'bg-blue'
  },
  {title: 'Cloud Services',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
  icon: 'fa-cloud',
  bgColor: 'bg-orange'
  },
  {title: 'Cyber Security',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
  icon: 'fa-shield-alt',
  bgColor: 'bg-green'
  },
]


class Services extends Component {

  render() {
    return (
      <section id="nase-usluge" className="section-2">
        <div className="section-wrapper">
          <div className="row pb-5 pt-5">
            <div className="col text-center">
              <p>Servises</p>
              <h2>What We Do</h2>
            </div>
          </div>
          <div className="row clearfix">
           {services.map((service, index) => {
             return <ServiceItem {...service} key={index}/>
           })}
          </div>
        </div>
      </section>
    )
  }
}

export default Services;
