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
        <p className="quote">"{this.state.quote}"</p>
        <button onClick={this.fetchQuote} className="btn">
          Fetch a new Quote!
        </button>
      </div>
    );
  }
}

export default Quoter;
