import React,{useState} from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import json from '../../imagepaths.json'


export default function Login(){
  window.scrollTo(0,0);

  const [showLoginCard, setShowLoginCard] = useState(true);

  const handleRemoveLoginCard = () => {
    setShowLoginCard(false);
  };

    return(
      <div className="login-container">
        <div className="login-bg">
        <div className="login">
        <h1 className="log-txt">Login</h1>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
            />
          </div>
          <Link to='/underConstruction'><button className="logButt" type="submit">Login</button></Link>
        </form>
      </div>
      {
      showLoginCard 
      &&
        <div className="login-card">
        <h1 className="txt-1">Hello there.</h1>
          <p className="txt-2"><span>Welcome to Coding Juntion</span></p>
        <div className="logoo">
          <button className="cross" onClick={handleRemoveLoginCard}>&times;</button>
          <img src={new URL(json.Login.logoo.url, import.meta.url).href} alt="Photu" />
        </div>
        <p className="txt-3">
            <ul></ul>
            <li>Get.</li>
            <li>Set.</li>
            <li>Code.</li>
          </p>
      </div>
      }
        </div>
      </div>
    )
}
