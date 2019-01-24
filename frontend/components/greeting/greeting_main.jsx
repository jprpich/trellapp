import React from 'react';
import { Link } from 'react-router-dom';

class GreetingMain extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="greeting-main">
        <h2>Trello lets you work more collaboratively and get more done.</h2>
        <p>Trello’s boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible and rewarding way.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe quam error dicta, expedita quibusdam magni omnis maxime, necessitatibus rem incidunt facilis, vel qui obcaecati itaque pariatur neque amet sed optio.</p>
        <Link className="app-signup-button" to="/signup">Sign Up – It’s Free!</Link>
      </div>
    )
  }
}

export default GreetingMain