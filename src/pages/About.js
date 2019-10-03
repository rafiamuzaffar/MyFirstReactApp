import React, {Component} from 'react';
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import Card from '../components/card.js'


class About extends Component{
    render() {
        return(
            <div className= "bg-secondary"> 
                <Navbar/>
                <div className= "container">
                    <h1 className="text-center tex-capitalize pt-5">   About us</h1>
                    <hr className="w-25 mx-auto pt-5"/>
                    <p>Hop-on Hop-off operates an every second day service.
                       To check travel dates, simply match the colour of the departure city to the colour 
                       in the calendar. The blue departure cities operate on BLUE calendar days,
                       the orange departure cities operate on the ORANGE calendar days.</p>
                       <br/>
                       <br/>

                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <img src="https://www.iflyfirstclass.com/Content/images/0357b503cdac49c99d993f284cb5cbb8.jpg" className="img-fluid"/>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <h1> Big adventure </h1>
                        <p> Planning a trip to Big Sky Country? With over 147,000 square miles to explore, 
                            it can be tough to know where to start. While Glacier and Yellowstone National
                            Parks are spectacular beyond words, there's more to discover throughout Montana 
                            than most people dream. Check out these trip ideas and draw inspiration to create
                            your own unique set of Montana moments. The backdrop to your adventures — mountains
                            and valleys, bears and bison, waterfalls and trout streams — will simply leave you
                            in awe.</p>
                            <button className="btn btn-primary"> wanna know more</button>
                            <br/>
                            <br/>
                    </div>
                    <Card/>
                    <br/>
                    
                </div>  
                <Footer/>
            </div>
            
        )
    }
}
export default About;