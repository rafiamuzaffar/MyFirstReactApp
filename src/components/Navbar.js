import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Navbar.css';

class Navbar extends Component {
    render(){
        return(
         <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="#">Hop-on-Hop-off</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/About">About</Link>
                </li>
              </ul>
            </div>
          </nav>
         
          <div className="bd-example">
          <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://toursce.com/blog/wp-content/uploads/2018/11/Best-Places-to-Visit-in-Istanbul.jpg" className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h2>Tasmania</h2>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://www.iflyfirstclass.com/Content/images/0357b503cdac49c99d993f284cb5cbb8.jpg" className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h2>Portugal</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://dimg04.c-ctrip.com/images/10060g0000007qh9aB677_C_750_350.jpg?proc=source%2Ftrip" className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h2>Istanbul</h2>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </div>
              </div>
            </div>
            <Link className="carousel-control-prev" to="#carouselExampleCaptions" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </Link>
            <Link className="carousel-control-next" to="#carouselExampleCaptions" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </Link>
          </div>
        </div>
        </header>
        
        )
    
       
    }
}
export default Navbar;