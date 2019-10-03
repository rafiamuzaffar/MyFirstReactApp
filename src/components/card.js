import React, { Component } from 'react'
import CardUI from '../components/cardUI.js';
import img1 from '../images/LosAngeles.jpg';
import img2 from '../images/japan.jpg';
import img3 from '../images/istanbul.jpg';

class Card extends Component{
    render() {
        return(
            <div className= "container-fluid d-flex justify-content-center">
                <div className= "row">
                    <div className= "col-md-4">
                        <CardUI imgsrc= {img1} title="LosAngeles"
                        text= "Los Angeles County, officially the County of Los Angeles, in the Los Angeles metropolitan area of the US state of California, is the most populous county in the United States, with more than 10  million inhabitants as of 2018. As such, it is the largest non–state level government entity in the United States."/>
                    </div>
                    <div className= "col-md-4">
                        <CardUI imgsrc= {img2} title="japan"
                        text= "Japan is an island country in East Asia.Located in the Pacific Ocean, it lies off the eastern coast of the Asian continent and stretches from the Sea of Okhotsk in the north to the East China Sea and the Philippine Sea in the south."/>
                    </div>
                    <div className= "col-md-4">
                        <CardUI imgsrc= {img3} title="istanbul"
                        text= "Istanbul is a major city in Turkey that straddles Europe and Asia across the Bosphorus Strait. Its Old City reflects cultural influences of the many empires that once ruled here."/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Card;
