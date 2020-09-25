import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData/fakeData';
import "./Home.css"

const Home = () => {
    const [placeName, setPlaceName] = useState(fakeData);
    const [showingPlace, setShowingPlace] = useState(fakeData[1]);

    const style = {
        display: 'flex',
        justifyContent: 'space-around'
    }
    
    return (
        <div className="row">
            <div className="col-md-4 col-sm-12 bg-dark text-light">
            <br/><br/>
                <h1>{showingPlace.name}</h1>
                <h6>{showingPlace.disc1}</h6>
                <Link to={"/book/"+showingPlace.name}> <button className="btn btn-warning">Book Now</button></Link>
            </div>

            <div style={style} className="col-md-8 bg-dark text-light">
            {
                placeName.map(placeName =><div onClick={() => setShowingPlace(placeName)}> <div
                    key = {placeName.name} placeName={placeName}><div className="home">
                    <div>
                        <div >
                            <img src={placeName.image} alt=""/>
                            <h5>{placeName.name}</h5>
                        </div>
                    </div>           
                </div></div></div>)
            }
           
            </div>          
        </div>
    );
};

export default Home;