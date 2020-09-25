import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData/fakeData';
import Hotel from '../Hotel/Hotel';


const BookingConfirm = (props) => {
    const {placeLink} = useParams();
    const {map, hotels} = fakeData.find(visitingPlace => visitingPlace.name === placeLink);
    console.log(hotels);

    return (
        <div  style={{textAlign: 'center'}}>
            <h1>Welcome to {placeLink}!</h1>
        <div className="row">
            <div className="col-md-6 col-sm-12 bg-dark" style={{padding: "10px"}}>
            {hotels.map(hotelName => <Hotel hotelName={hotelName}></Hotel>)}
            </div>
            <div className="col-md-1"></div>
            
            <div className="col-md-5 bg-dark">
                <h3>Google Map</h3>
            <iframe src={map} width="450px" height="380px" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
        </div></div>
    );
};

export default BookingConfirm;