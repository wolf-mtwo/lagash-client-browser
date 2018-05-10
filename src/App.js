import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import person_1 from './img/person_1.jpg'
import person_2 from './img/person_2.jpg'
import person_3 from './img/person_3.jpg'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header role="banner">
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container">
              <a className="navbar-brand" href="index.html">Fitne<span>zz</span></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarsExample05">
                <ul className="navbar-nav mr-auto pl-lg-5 pl-0">
                  <li className="nav-item">
                    <a className="nav-link active" href="index.html">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="about.html">About</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="services.html" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</a>
                    <div className="dropdown-menu" aria-labelledby="dropdown04">
                      <a className="dropdown-item" href="services.html">Body Builder</a>
                      <a className="dropdown-item" href="services.html">Yoga Pilate</a>
                      <a className="dropdown-item" href="services.html">Healthy Life</a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="news.html">News</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">Contact</a>
                  </li>
                </ul>

                <ul className="navbar-nav ml-auto">
                  <li className="nav-item cta-btn">
                    <a className="nav-link" href="member.html">Become a member</a>
                  </li>
                </ul>

              </div>
            </div>
          </nav>
        </header>
        <section className="home-slider owl-carousel">
          <div className="slider-item wargos-slide-1">
            <div className="container">
              <div className="row slider-text align-items-center justify-content-center">
                <div className="col-md-8 text-center col-sm-12 element-animate">
                  <h1>Health is wealth</h1>
                  <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit, necessitatibus, soluta sit quam minima expedita atque corrupti reiciendis.</p>
                  <p><a href="#" className="btn btn-white btn-outline-white">Get Started</a> <a href="#" className="btn btn-link btn-white">Download</a></p>
                </div>
              </div>
            </div>
          </div>
        </section>




        <section className="section bg-light element-animate">

          <div className="clearfix mb-5 pb-5">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12 text-center heading-wrap">
                  <h2>Our Schedule</h2>
                  <span className="back-text-dark">Schedule</span>
                </div>
              </div>
            </div>
          </div>

          <div className="container">

            <div className="row no-gutters">
              <div className="col-md-6">
                <div className="sched d-block d-lg-flex">
                  <div className="bg-image order-2 wargos-square-1"></div>
                  <div className="text order-1">
                    <h3>Fitness Class Name Here</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...</p>
                    <p className="sched-time">
                      <span><span className="fa fa-clock-o"></span> 5:30 PM</span> <br/>
                      <span><span className="fa fa-calendar"></span> April 22, 2018</span> <br/>
                    </p>
                    <p><a href="#" className="btn btn-primary btn-sm">Join from $15</a></p>

                  </div>

                </div>

                <div className="sched d-block d-lg-flex">
                  <div className="bg-image wargos-square-2"></div>
                  <div className="text">
                    <h3>Fitness Class Name Here</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...</p>
                    <p className="sched-time">
                      <span><span className="fa fa-clock-o"></span> 5:30 PM</span> <br/>
                      <span><span className="fa fa-calendar"></span> April 22, 2018</span> <br/>
                    </p>
                    <p><a href="#" className="btn btn-primary btn-sm">Join from $15</a></p>

                  </div>

                </div>

              </div>

              <div className="col-md-6">
                <div className="sched d-block d-lg-flex">
                  <div className="bg-image order-2 wargos-square-4"></div>
                  <div className="text order-1">
                    <h3>Fitness Class Name Here</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...</p>
                    <p className="sched-time">
                      <span><span className="fa fa-clock-o"></span> 5:30 PM</span> <br/>
                      <span><span className="fa fa-calendar"></span> April 22, 2018</span> <br/>
                    </p>
                    <p><a href="#" className="btn btn-primary btn-sm">Join from $15</a></p>

                  </div>

                </div>

                <div className="sched d-block d-lg-flex">
                  <div className="bg-image wargos-square-3"></div>
                  <div className="text">
                    <h3>Fitness Class Name Here</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...</p>
                    <p className="sched-time">
                      <span><span className="fa fa-clock-o"></span> 5:30 PM</span> <br/>
                      <span><span className="fa fa-calendar"></span> April 22, 2018</span> <br/>
                    </p>
                    <p><a href="#" className="btn btn-primary btn-sm">Join from $15</a></p>

                  </div>

                </div>

              </div>
            </div>


          </div>
        </section>



        <section className="section element-animate">

          <div className="clearfix mb-5 pb-5">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12 text-center heading-wrap">
                  <h2>Testimonial</h2>
                  <span className="back-text">Testimonial</span>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <blockquote className="testimonial">
                  <p>&ldquo; Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, obcaecati? Quis eum minus, sequi atque quisquam ducimus aliquam veritatis nobis cum iusto neque enim explicabo maxime natus doloribus, fuga sunt. &rdquo;</p>
                  <div className="d-flex author">
                    <img src={person_1} alt="" className="mr-4"/>
                    <div className="author-info">
                      <h4>Mellisa Howard</h4>
                      <p>CEO, XYZ Company</p>
                    </div>
                  </div>
                </blockquote>
              </div>
              <div className="col-md-4">
                <blockquote className="testimonial">
                  <p>&ldquo; Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, obcaecati? Quis eum minus, sequi atque quisquam ducimus aliquam veritatis nobis cum iusto neque enim explicabo maxime natus doloribus, fuga sunt. &rdquo;</p>
                  <div className="d-flex author">
                    <img src={person_2} alt="" className="mr-4"/>
                    <div className="author-info">
                      <h4>Mike Richardson</h4>
                      <p>CEO, XYZ Company</p>
                    </div>
                  </div>
                </blockquote>
              </div>
              <div className="col-md-4">
                <blockquote className="testimonial">
                  <p>&ldquo; Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, obcaecati? Quis eum minus, sequi atque quisquam ducimus aliquam veritatis nobis cum iusto neque enim explicabo maxime natus doloribus, fuga sunt. &rdquo;</p>
                  <div className="d-flex author">
                    <img src={person_3} alt="" className="mr-4"/>
                    <div className="author-info">
                      <h4>Charles White</h4>
                      <p>CEO, XYZ Company</p>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </section>
        <section className="section element-animate">
          <div className="clearfix mb-5 pb-5">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12 text-center heading-wrap">
                  <h2>Blog</h2>
                  <span className="back-text">Our Blog</span>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="blog d-block d-lg-flex">
                  <div className="bg-image wargos-square-2"></div>
                  <div className="text">
                    <h3>Fitness Class Name Here</h3>
                    <p className="sched-time">
                      <span><span className="fa fa-calendar"></span> April 22, 2018</span> <br/>
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...</p>

                    <p><a href="#" className="btn btn-primary btn-sm">Read More</a></p>

                  </div>

                </div>
              </div>
              <div className="col-md-6">
                <div className="blog d-block d-lg-flex">
                  <div className="bg-image wargos-square-2"></div>
                  <div className="text">
                    <h3>Fitness Class Name Here</h3>
                    <p className="sched-time">
                      <span><span className="fa fa-calendar"></span> April 22, 2018</span> <br/>
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...</p>

                    <p><a href="#" className="btn btn-primary btn-sm">Read More</a></p>

                  </div>

                </div>
              </div>
            </div>
          </div>

        </section>
      </div>
    );
  }
}

export default App;
