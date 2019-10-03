import React, {Component} from 'react';
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import card from '../components/card.js';

class Home extends Component {
    render() {
        return(
                <div className="bg-secondary">
                    <Navbar/>
                    <div className= "container">
                    <h2> Welcome to home </h2>
                    <p> Plan Your Perfect Trip! Find Deals on Hotels, Flights, and Things to Do. 
                        Amazing Experiences. Fun Things to Do. Hidden Gems. Candid traveler photos. 
                        Vacation Rentals. Best Places to Eat. Easy price comparison. Cheap Flights. 
                        Millions of hotel reviews. Tours, Attractions + More.</p>
                        <br/>
                        <h5 className="text-black"> SERVICES </h5>
                        <p> Matches your travel preferences with over 230,000,000 data points:
                                1)Best places and time to visit <br/>
                                2)Reviews <br/>
                                3)Transportation options <br/>
                                4)Hidden gems</p>
                        </div>
                    <card/>  
                    <br/>
                    <Footer/>  
                </div>
        )
    }
}
export default Home;