import React from 'react';
import "./Hotel.css"

const Hotel = (props) => {

    const {name, price, image} = props.hotelName;
    console.log(name);

    return (
        <div className="hotels">
           <div className="row">
               <div className="col-md-6">
            <img style={{width: "200px"}}src={image} alt=""/>
            </div>
            <div className="col-md-6" style={{backgroundColor: "lightgray"}}>
            <p>{name} </p>
            <p> Per Night: {price}$</p>
            </div> 
            </div>

        </div>
    );
};

export default Hotel;