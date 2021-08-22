import React, { Component } from "react";

class Quoter extends Component {
  render() {
    return (
      <div className="quote-container">
        <div className="quote">
          <p>QUOTE!!!</p>
        </div>
        <div className="btn-container">
          <button>CLICK ME!</button>
        </div>
      </div>
    );
  }
}

export default Quoter;
