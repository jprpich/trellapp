import React from 'react';
import { Link } from 'react-router-dom';

class GreetingMain extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
      <div className="space-holder">

      </div>
      <div className="greeting-main">
        <div className="layout-two-col">
          <div className="hero-text">
            <h1>Trellapp lets you work more collaboratively and get more done.</h1>
            <p className="big">Trellapp’s boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible and rewarding way.</p>
            <Link className="signup-button" to="/signup">Sign Up – It’s Free!</Link>
          </div>
          <div className="hero-image">
            <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/308998dcb3ed5ab3d01217a4d24ffa03/hero-a.svg" alt=""/>
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default GreetingMain