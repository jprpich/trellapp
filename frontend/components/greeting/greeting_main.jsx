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
            <h1>Create multiple boards and track a single projects lists.</h1>
            <p className="big">Boards contain lists which contain cards. Cards have a title and description. Cards can be moved from one list to another.</p>
            <Link className="signup-button" to="/signup">Sign Up – It’s Free!</Link>
          </div>
          <div className="hero-image">
            <img src="https://cdn.elearningindustry.com/wp-content/uploads/2016/06/5-creative-ways-effective-elearning-experience.png" alt=""/>
          </div>
        </div>
        <footer>
          <ul>
            <li>
              <a href="https://github.com/jprpich" target="_blank">Github</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/joshua-mark-prpich/" target="_blank">LinkedIn</a>
            </li>
            <li>
              <a href="https://angel.co/joshua-mark-prpich-1" target="_blank">AngelList</a>
            </li>
            <li>
              <a href="https://jprpich.github.io/" target="_blank">Personal Site</a>
            </li>
          </ul>
          <p>© Copyright 2019. All rights reserved.</p>
        </footer>
      </div>
      </>
    )
  }
}

export default GreetingMain