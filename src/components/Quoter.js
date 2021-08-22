import React, { Component } from "react";
import axios from "axios";

class Quoter extends Component {
  constructor() {
    super();
    this.state = {
      quote: "",
    };
  }

  fetchQuote = () => {
    axios
      .get("	https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({
          quote: advice,
        });
      })
      .catch((error) => {
        if (error) {
          console.log("ERROR ! :(  ", error);
        }
      });
  };

  componentDidMount() {
    this.fetchQuote();
  }

  render() {
    return (
      <div className="quote-container">
        <div className="quote">
          <p>{this.state.quote}</p>
        </div>
        <div className="btn-container">
          <button onClick={this.fetchQuote}>Fetch a new Quote!</button>
        </div>
      </div>
    );
  }
}

export default Quoter;
