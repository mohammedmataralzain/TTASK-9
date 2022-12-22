import React from "react";
import "./style.css";

class Counter extends React.Component {
  render(props) {
 
    return (
      <div className="counter">
        <p className="counter-content">{this.props.count > 0 ? this.props.count : 0 }</p>
        <button
          onClick={() => this.props.decrement(this.props.steps, this.props.id )}
          className="counter-button background-red"
        >
          -
        </button>
        <button
          onClick={() => this.props.increment(this.props.steps, this.props.id)}
          className="counter-button background-green"
        >
          +
        </button>
      </div>
    );
  }
}

export default Counter;
