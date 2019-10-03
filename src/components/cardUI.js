import React from 'react';
import "./card.css";


const cardUI=props=> {
    return(
        <div className= "card text-center shadow">
        <div className= "overflow">
            <img src= {props.imgsrc} alt= "image 1" className= "card-img-top"/>
        </div>
        <div className="card-body text-dark">
            <h3 className="card-title"> {props.title}</h3>
            <p className="card-text text-secondary"> {props.text}</p>
             <a href="#" className="btn btn-outline-success">Visit </a>
           
        </div>
       </div>
    );
}
export default cardUI;