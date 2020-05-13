import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Nav from "../components/Nav";
import Loginform from "../components/Loginform";
import SimpleReactValidator from "simple-react-validator";

export class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityname: "",
      citycountry: "",
      cityimg: "",
      itineraryname: "",
      itinerarytitle: "",
      itineraryuser: this.props.userData.currentUser.username,
      itinerarypicture: this.props.userData.currentUser.picture,
      itineraryduration: "",
      itineraryprice: "",
      itineraryhashtags: [],
      itineraryactivities: [],
    };

    // form function for setting state and handling submit
    this.setField = this.setField.bind(this);
    this.handleSubmitCity = this.handleSubmitCity.bind(this);
    this.handleSubmitItinerary = this.handleSubmitItinerary.bind(this);

    // imported validation library
    this.validator = new SimpleReactValidator();
  }

  // function that sets state upon user form input
  setField(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  // function for submitting city form
  async handleSubmitCity(event) {
    event.preventDefault();

    // checks form validation and returns error messages if not valid inputs
    if (!this.validator.fieldValid("city name")) {
      this.validator.showMessageFor("city name");
      this.forceUpdate();
    }

    if (!this.validator.fieldValid("country")) {
      this.validator.showMessageFor("country");
      this.forceUpdate();
    }

    if (!this.validator.fieldValid("picture")) {
      this.validator.showMessageFor("picture");
      this.forceUpdate();
    }

    // if all valid, post data to server
    if (
      this.validator.fieldValid("city name") &&
      this.validator.fieldValid("country") &&
      this.validator.fieldValid("picture")
    ) {
      const city = {
        name: this.state.cityname,
        country: this.state.citycountry,
        img: this.state.cityimg,
      };
      console.log(city);
    }
  }

  // function for submitting itinerary form
  async handleSubmitItinerary(event) {
    event.preventDefault();

    // checks form validation and returns error messages if not valid inputs
    if (!this.validator.fieldValid("city")) {
      this.validator.showMessageFor("city");
      this.forceUpdate();
    }

    if (!this.validator.fieldValid("title")) {
      this.validator.showMessageFor("title");
      this.forceUpdate();
    }

    if (!this.validator.fieldValid("duration")) {
      this.validator.showMessageFor("duration");
      this.forceUpdate();
    }

    if (!this.validator.fieldValid("price")) {
      this.validator.showMessageFor("price");
      this.forceUpdate();
    }

    if (!this.validator.fieldValid("hashtags")) {
      this.validator.showMessageFor("hashtags");
      this.forceUpdate();
    }

    if (!this.validator.fieldValid("activities")) {
      this.validator.showMessageFor("activities");
      this.forceUpdate();
    }

    // if all valid, post data to server
    if (
      this.validator.fieldValid("city") &&
      this.validator.fieldValid("title") &&
      this.validator.fieldValid("duration") &&
      this.validator.fieldValid("price") &&
      this.validator.fieldValid("hashtags") &&
      this.validator.fieldValid("activities")
    ) {
      const hashtagString = this.state.itineraryhashtags;
      const hashtagArray = hashtagString.split(" ");
      const activityString = this.state.itineraryactivities;
      const activityArray = activityString.split(" ");

      // CONVERT ITINERARYNAME & TITLE TO TITLE CASE BEFORE INSERTING BELOW

      const itinerary = {
        name: this.state.itineraryname,
        title: this.state.itinerarytitle,
        user: this.state.itineraryuser,
        picture: this.state.itinerarypicture,
        duration: this.state.itineraryduration,
        price: this.state.itineraryprice,
        hashtags: hashtagArray,
        activities: activityArray,
      };
      console.log(itinerary);
    }
  }

  render() {
    const userData = this.props.userData.isLoggedIn ? (
      <div className="add-itinerary">
        <div className="form-container">
          <h3 className="form-title">Add a New City:</h3>
          <form
            className="add-form"
            id="city-form"
            onChange={this.setField}
            onSubmit={this.handleSubmitCity}
            method="post"
            action="http://localhost:5000/cities/addcity"
          >
            <div className="form-row">
              <label htmlFor="cityname">City Name:</label>
              <input
                type="text"
                id="cityname"
                name="cityname"
                value={this.state.cityname}
                onChange={this.setField}
              ></input>
              {/*city name required and only alpha and space characters*/}
              {this.validator.message(
                "city name",
                this.state.cityname,
                "required|alpha_space"
              )}
            </div>
            <div className="form-row">
              <label htmlFor="citycountry">Country:</label>
              <select
                id="citycountry"
                name="citycountry"
                value={this.state.citycountry}
                onChange={this.setField}
              >
                <option value=""></option>
                <option value="Afganistan">Afghanistan</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antigua & Barbuda">Antigua & Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Aruba">Aruba</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bermuda">Bermuda</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bonaire">Bonaire</option>
                <option value="Bosnia & Herzegovina">
                  Bosnia & Herzegovina
                </option>
                <option value="Botswana">Botswana</option>
                <option value="Brazil">Brazil</option>
                <option value="British Indian Ocean Ter">
                  British Indian Ocean Ter
                </option>
                <option value="Brunei">Brunei</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Canary Islands">Canary Islands</option>
                <option value="Cape Verde">Cape Verde</option>
                <option value="Cayman Islands">Cayman Islands</option>
                <option value="Central African Republic">
                  Central African Republic
                </option>
                <option value="Chad">Chad</option>
                <option value="Channel Islands">Channel Islands</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Christmas Island">Christmas Island</option>
                <option value="Cocos Island">Cocos Island</option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Congo">Congo</option>
                <option value="Cook Islands">Cook Islands</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Cote DIvoire">Cote DIvoire</option>
                <option value="Croatia">Croatia</option>
                <option value="Cuba">Cuba</option>
                <option value="Curaco">Curacao</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="East Timor">East Timor</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Falkland Islands">Falkland Islands</option>
                <option value="Faroe Islands">Faroe Islands</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="French Guiana">French Guiana</option>
                <option value="French Polynesia">French Polynesia</option>
                <option value="French Southern Ter">French Southern Ter</option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Gibraltar">Gibraltar</option>
                <option value="Great Britain">Great Britain</option>
                <option value="Greece">Greece</option>
                <option value="Greenland">Greenland</option>
                <option value="Grenada">Grenada</option>
                <option value="Guadeloupe">Guadeloupe</option>
                <option value="Guam">Guam</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guinea">Guinea</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Hawaii">Hawaii</option>
                <option value="Honduras">Honduras</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="Indonesia">Indonesia</option>
                <option value="India">India</option>
                <option value="Iran">Iran</option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Isle of Man">Isle of Man</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Korea North">Korea North</option>
                <option value="Korea Sout">Korea South</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Laos">Laos</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libya">Libya</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macau">Macau</option>
                <option value="Macedonia">Macedonia</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Malawi">Malawi</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Martinique">Martinique</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mayotte">Mayotte</option>
                <option value="Mexico">Mexico</option>
                <option value="Midway Islands">Midway Islands</option>
                <option value="Moldova">Moldova</option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Nambia">Nambia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherland Antilles">Netherland Antilles</option>
                <option value="Netherlands">
                  Netherlands (Holland, Europe)
                </option>
                <option value="Nevis">Nevis</option>
                <option value="New Caledonia">New Caledonia</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Niue">Niue</option>
                <option value="Norfolk Island">Norfolk Island</option>
                <option value="Norway">Norway</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau Island">Palau Island</option>
                <option value="Palestine">Palestine</option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Phillipines">Philippines</option>
                <option value="Pitcairn Island">Pitcairn Island</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Qatar">Qatar</option>
                <option value="Republic of Montenegro">
                  Republic of Montenegro
                </option>
                <option value="Republic of Serbia">Republic of Serbia</option>
                <option value="Reunion">Reunion</option>
                <option value="Romania">Romania</option>
                <option value="Russia">Russia</option>
                <option value="Rwanda">Rwanda</option>
                <option value="St Barthelemy">St Barthelemy</option>
                <option value="St Eustatius">St Eustatius</option>
                <option value="St Helena">St Helena</option>
                <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                <option value="St Lucia">St Lucia</option>
                <option value="St Maarten">St Maarten</option>
                <option value="St Pierre & Miquelon">
                  St Pierre & Miquelon
                </option>
                <option value="St Vincent & Grenadines">
                  St Vincent & Grenadines
                </option>
                <option value="Saipan">Saipan</option>
                <option value="Samoa">Samoa</option>
                <option value="Samoa American">Samoa American</option>
                <option value="San Marino">San Marino</option>
                <option value="Sao Tome & Principe">Sao Tome & Principe</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Slovakia">Slovakia</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somalia">Somalia</option>
                <option value="South Africa">South Africa</option>
                <option value="Spain">Spain</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Sudan">Sudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Swaziland">Swaziland</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Syria">Syria</option>
                <option value="Tahiti">Tahiti</option>
                <option value="Taiwan">Taiwan</option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania">Tanzania</option>
                <option value="Thailand">Thailand</option>
                <option value="Togo">Togo</option>
                <option value="Tokelau">Tokelau</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinidad & Tobago">Trinidad & Tobago</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Turks & Caicos Is">Turks & Caicos Is</option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Uganda">Uganda</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Erimates">
                  United Arab Emirates
                </option>
                <option value="United States of America">
                  United States of America
                </option>
                <option value="Uraguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Vatican City State">Vatican City State</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Virgin Islands (Brit)">
                  Virgin Islands (Brit)
                </option>
                <option value="Virgin Islands (USA)">
                  Virgin Islands (USA)
                </option>
                <option value="Wake Island">Wake Island</option>
                <option value="Wallis & Futana Is">Wallis & Futana Is</option>
                <option value="Yemen">Yemen</option>
                <option value="Zaire">Zaire</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
              </select>
              {/*country is required*/}
              {this.validator.message(
                "country",
                this.state.citycountry,
                "required"
              )}
            </div>
            <div className="form-row">
              <label htmlFor="cityimg">City Picture (URL):</label>
              <input
                type="text"
                id="cityimg"
                name="cityimg"
                value={this.state.cityimg}
                onChange={this.setField}
              ></input>
              {/*picture required and must be url format*/}
              {this.validator.message(
                "picture",
                this.state.cityimg,
                "required|url"
              )}
            </div>
            <button
              type="submit"
              form="city-form"
              value="Submit"
              id="city-submit"
              className="form-btn"
            >
              Add City
            </button>
          </form>
        </div>
        <h2 style={orSplitter}>OR</h2>
        <div className="form-container">
          <h3 className="form-title">Add Itinerary to Existing City:</h3>
          <form
            className="add-form"
            id="itinerary-form"
            onChange={this.setField}
            onSubmit={this.handleSubmitItinerary}
            method="post"
            action="http://localhost:5000/itineraries/additinerary"
          >
            <div className="form-row">
              <label htmlFor="itineraryname">City:</label>
              <select
                id="itineraryname"
                name="itineraryname"
                value={this.state.itineraryname}
                onChange={this.setField}
              >
                <option value=""></option>
                {this.props.cityData.data.map((city, index) => {
                  return (
                    <option key={index} value={city.name}>
                      {city.name}
                    </option>
                  );
                })}
              </select>
              {/*city is required*/}
              {this.validator.message(
                "city",
                this.state.itineraryname,
                "required"
              )}
            </div>
            <div className="form-row">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="itinerarytitle"
                name="itinerarytitle"
                value={this.state.itinerarytitle}
                onChange={this.setField}
              ></input>
              {/*title is required and only alphanum and space characters*/}
              {this.validator.message(
                "title",
                this.state.itinerarytitle,
                "required|alpha_num_space"
              )}
            </div>
            <div className="form-row">
              <label htmlFor="duration">Duration (hrs):</label>
              <input
                type="number"
                id="itineraryduration"
                name="itineraryduration"
                value={this.state.itineraryduration}
                onChange={this.setField}
              ></input>
              {/*duration required and positive numbers only*/}
              {this.validator.message(
                "duration",
                this.state.itineraryduration,
                "required|numeric|min:0,num"
              )}
            </div>
            <div className="form-row">
              <label htmlFor="price">Price:</label>
              <select
                id="itineraryprice"
                name="itineraryprice"
                value={this.state.itineraryprice}
                onChange={this.setField}
              >
                <option value=""></option>
                <option value="Free">Free</option>
                <option value="$">$</option>
                <option value="$$">$$</option>
                <option value="$$$">$$$</option>
              </select>
              {/*price is required*/}
              {this.validator.message(
                "price",
                this.state.itineraryprice,
                "required"
              )}
            </div>
            <div className="form-row">
              <label htmlFor="hashtags">Hashtags:</label>
              <input
                type="text"
                id="itineraryhashtags"
                name="itineraryhashtags"
                placeholder="Separated by spaces"
                value={this.state.itineraryhashtags}
                onChange={this.setField}
              ></input>
              {/*hashtags not required but only alphanum and space characters*/}
              {this.validator.message(
                "hashtags",
                this.state.itineraryhashtags,
                "alpha_num_space"
              )}
            </div>
            <div className="form-row">
              <label htmlFor="activities">Activities:</label>
              <input
                type="text"
                id="itineraryactivities"
                name="itineraryactivities"
                placeholder="Separated by spaces"
                value={this.state.itineraryactivities}
                onChange={this.setField}
              ></input>
              {/*activites required and only alphanum and space characters*/}
              {this.validator.message(
                "activities",
                this.state.itineraryactivities,
                "required|alpha_num_space"
              )}
            </div>
            <button
              type="submit"
              form="itinerary-form"
              value="Submit"
              id="itinerary-form"
              className="form-btn"
            >
              Add Itinerary
            </button>
          </form>
        </div>
      </div>
    ) : (
      <div className="login-content">
        <h2>Please log in below in order to add itineraries:</h2>
        <Loginform />
        <p>
          Don't have an account yet?<br></br>
          <Link to="createaccount" className="login-switch">
            Create an account
          </Link>
        </p>
      </div>
    );

    return (
      <div>
        <Nav />
        <div className="content">{userData}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.auth,
    cityData: state.cities,
  };
};

const orSplitter = {
  margin: "10% 0",
  color: "#3c91e6",
};

export default connect(mapStateToProps, null)(Add);
