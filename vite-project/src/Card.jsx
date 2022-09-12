import React from "react";  
import "./Style.css";
import pin from "/public/assets/pin.png";
import Data from "/public/assets/Data";

export default function Card(props) {
    
    return(
        <div className="card">
            <img src={props.img} className="card--image" />
            <section className="card--content">
            <span><img src={pin} className="card--content--pin" /></span>
            <span><p className="card--content--title">{props.place}</p></span>
            <span><a className="card--content--description" href={props.url} target="_blank">View on Google Maps</a></span>
            <h1>{props.name}</h1>
            <h4>{props.start} - {props.end}</h4>
            <p className="desc">{props.desc}</p>
            </section>
        </div>
    )
}