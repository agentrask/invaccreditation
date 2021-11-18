import React from "react";
import "./welcome.css"

export default class Home extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="header">
          <h2>Invaccredition</h2>
          <p>Get an investor accredition in less than 24 hours at <strong>$50</strong>.</p>
          <p>A licensed CPA will verify your application.</p>
        </div>
        <form>
          <label>Legal Name</label>
          <input type="text" />
          <label>Primary residence address</label>
          <input type="text" />
          <label>I'm verified because:</label>
          <div className="reasons">
            <input type="radio" name="verification_reason" id="one_million"/>
            <label for="one_million">I have a net worth of $1 million, excluding my primary residence</label>
            <input type="radio" name="verification_reason" id="two_hundred"/>
            <label for="two_hundred">I have made over $200K the past two years, and am on track to do so again this year</label>
            <input type="radio" name="verification_reason" id="five_million"/>
            <label for="five_million">I have a net worth of over $5 million, including illiquid startup stock, i.e. qualifies purchaser</label>
          </div>
          <label>Supporting documents</label>
          <button>Upload supporting documents</button>
          <label>Email address</label>
          <input type="text" />
          <label>Payment info</label>

          <button type="submit">Submit information for verification</button>
        </form>
        <div className="footer">
          &copy; 2021 Invaccredition &bull; hi@invaccredition.com
        </div>
      </div >
    )
  }
}