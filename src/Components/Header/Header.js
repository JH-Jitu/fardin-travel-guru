import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div classNameName="headerTab">
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#"> <img style={{width: "110px", backgroundColor: "lightgray", padding: "5px"}} src="https://raw.githubusercontent.com/ProgrammingHero1/travel-guru/master/Logo.png" alt=""/> </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
      <a className="nav-link" href="#">Features</a>
      <a className="nav-link" href="#">Pricing</a>
      <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      {
      loggedInUser.email ? <button className="nav-link btn btn-warning text-dark" onClick={() => setLoggedInUser({})}>Sign Out</button> :
      <Link to="/login"><button className="nav-link btn btn-warning text-dark">Sign In</button></Link>
      }

      {
      loggedInUser.email && <h4 className="nav-link">{loggedInUser.email}</h4>
      }
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;

