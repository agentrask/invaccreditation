import React from "react";
import "./welcome.css"
import logo from "../assets/logo.svg";
import file_upload from "../assets/file_upload_icon.svg";

export default class Home extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <img src={logo} />
          <div className="header">
            <p>A licensed CPA will verify your application.</p>
            <p>Get an investor accredition in less than 24 hours at <strong>$50</strong>.</p>
          </div>
          <form>
            <label>Legal name</label>
            <input type="text" placeholder="Legal Name" />
            <label>Primary residence address</label>
            <input type="text" id="street_address" placeholder="Street address" />
            <div className="grouped_address_inputs">
              <input type="text" id="city" placeholder="City" />
              <input type="text" id="state" placeholder="State" />
              <input type="text" id="zipcode" placeholder="Zip code" />
            </div>
            <input type="text" id="country" placeholder="Country" />
            <label>I'm verified because:</label>
            <div className="reason">
              <input type="checkbox" name="one_million" value="one_million" id="one_million" />
              <label for="one_million">I have a net worth of $1 million, excluding my primary residence</label>
              <span class="checkmark"></span>
            </div>
            <div className="reason">
              <input type="checkbox" name="two_hundred" value="two_hundred" id="two_hundred" />
              <label for="two_hundred">I have made over $200K the past two years, and am on track to do so again this year</label>
              <span class="checkmark"></span>
            </div>
            <div className="reason">
              <input type="checkbox" name="five_million" value="five_million  " id="five_million" />
              <label for="five_million">I have a net worth of over $5 million, including illiquid startup stock, i.e. qualified purchaser</label>
              <span class="checkmark"></span>
            </div>
            <label>Supporting documents</label>
            <button><img src={file_upload} /> Upload supporting documents</button>
            <label>Email address</label>
            <input type="text" placeholder="name@domain" />
            <label>Payment info</label>
            <button type="submit">Submit information for verification</button>
            <p id="stripe_tag">Powered by <strong>stripe</strong></p>
          </form>
          <div className="footer">
            &copy; 2021 Invaccredition &bull; hi@invaccredition.com
          </div>
        </div>
      </div >
    )
  }
}
