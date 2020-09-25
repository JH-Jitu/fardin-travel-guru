import React, { useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import fakeData from '../../fakeData/fakeData';

const Book = () => {
    const {placeLink} = useParams();
    const placeNames = fakeData.find(visitingPlace => visitingPlace.name === placeLink);
    const history = useHistory()
    const handleBooking = (placeLink) => {
        history.push(`/book/confirm/${placeLink}`);
    }

    const [total, setTotal] = useState({
        dateFrom: 0,
        dateTo: 0
    })

    const initialDay = new Date(total.dateFrom)
    const endingDay = new Date(total.dateTo)
    const totalDays = (endingDay-initialDay)/(24*60*60*1000);

    const handleChange = (e) => {
        let isOrigin;
        if(e.target.name === "from"){
            const newFromInfo = {...total};
            if(newFromInfo){
                newFromInfo.dateFrom = e.target.value;
            }
            setTotal(newFromInfo)
        }
        if(e.target.name === "to"){
            const newToInfo = {...total}
            if(newToInfo){
                newToInfo.dateTo = e.target.value;
            }
            setTotal(newToInfo);
        }        
        if(e.target.name === "origin"){
            if(e.target.value.length > 3){
                isOrigin = true;
            }
        }     
    }

    return (
        <div><h1 align="center" className="text-white">Booking {placeLink}'s Travel.</h1>
        <div style={{textAlign: 'center', padding: "50px"}} className="row">            
            <div className="col-md-5 col-sm-12 bg-dark text-white" style={{padding: "20px", borderRadius: "10px"}}>            
            <p>{placeNames.disc2}</p>
            <Link to="/home"> <button className="btn btn-warning">Go Home</button> </Link>
            </div>
            
            <div className="col-md-2"></div>

            <div className="col-md-5 col-sm-12 bg-dark" style={{padding: "20px", borderRadius: "10px"}}>
        <form>
            <div class="input-group mb-3">
                <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Origin</span>
                </div>
                    <input required type="text" class="form-control" name="origin" onChange={handleChange} placeholder="Type your pickup place" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            <div class="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Destination</span>
                    </div>
                    <input style={{backgroundColor: "white"}} type="text" class="form-control-plaintext" value={" " + placeLink} aria-label="Username" aria-describedby="basic-addon1"/>
            </div>

            <div class="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">From</span>
                    </div>
                    <input type="date" class="form-control"  name="from" onChange={handleChange} aria-describedby="basic-addon1"/>
            </div>
            <div class="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">To</span>
                    </div>
                    <input type="date" class="form-control"  name="to" onChange={handleChange} aria-describedby="basic-addon1"/>
            </div>
                {totalDays >= 1 ?<button type="submit" className="btn btn-warning" onClick={() => handleBooking(placeLink)}>Book The room</button> : <p style={{backgroundColor: "yellow"}}> Select More than 1day</p>}
                </form>
                {handleChange.isOrigin === false && <p>none</p> }               
                </div>
        </div></div>
        
    );
};

export default Book;