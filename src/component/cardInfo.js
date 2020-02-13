import React, { Component } from "react";
import "./cardInfo.css";
import puce from "./img/puce.png";
import masterLogo from "./img/master-card.png";

export class cardInfo extends Component {
  state = {
    cardNumber: "",
    name: "",
    date: ""
  };
  numChange = e => {
    let regexCardNum = /[^0-9]$/;
    if (!regexCardNum.test(e.target.value)) {
      this.setState({
        cardNumber: e.target.value
      });
    }
  };
  nameChange = e => {
    this.setState({
      name: e.target.value
    });
  };
  dateChange = e => {
    let regexCardDate = /[^0-9 ]$/;
    let regexMonth = /[^0-1 ]$/;
    if (!regexCardDate.test(e.target.value)) {
      if (
        !regexMonth.test(e.target.value.substr(0, 1)) &&
        e.target.value.substr(0, 2) <= 12
      ) {
        this.setState({
          date: e.target.value
        });
      }
    }
  };
  addSpace = number => {
    return number.toString().replace(/\d{4}(?=.)/g, "$& ");
  };
  toUpper = name => {
    return name.toUpperCase();
  };
  addSlice = date => {
    if (date.length < 5) {
      return (date = date.substr(0, 2) + "/" + date.substr(2, 3));
    }
  };

  render() {
    return (
      <div>
        <form className="input-fields">
          <input
            type="text"
            placeholder="card number"
            onChange={this.numChange}
            value={this.state.cardNumber}
            maxLength={16}
          />
          <input
            type="text"
            placeholder="name"
            onChange={this.nameChange}
            value={this.state.name}
            maxLength={20}
          />
          <input
            type="text"
            placeholder="MM/YY"
            onChange={this.dateChange}
            value={this.state.date}
            maxLength={4}
          />
        </form>
        <div className="output">
          <img src={puce} className="puce" />
          <p className="output-number">
            {this.addSpace(this.state.cardNumber.padEnd(16, "."))}
          </p>
          <p className="output-name">{this.toUpper(this.state.name.padEnd(1, "."))}</p>
          <img src={masterLogo} className="master-card-logo" />
          <p className="output-date">
            {this.addSlice(this.state.date.padEnd(4, "."))}
          </p>
        </div>
      </div>
    );
  }
}

export default cardInfo;
