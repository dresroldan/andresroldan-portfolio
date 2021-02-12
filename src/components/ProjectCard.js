import React from "react";
import "../styles/projectcard.scss";

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.img} />
        <div className="card-body">
          <h2>{this.props.title}</h2>
          <p>{this.props.description}</p>

          <button>{this.props.link}</button>
          <button>{this.props.linktwo}</button>
        </div>
      </div>
    );
  }
}

export default Card;

//----------
//Final render
//----------

//   ReactDOM.render(<App />, document.querySelector('#app'))
