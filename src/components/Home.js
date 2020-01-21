import React from "react";
import "../css/Home.css";

function Home() {
  return (
    <div class="home">
      <div class="container register">
        <div class="row">
          <div class="col-md-3 register-left">
            <h3>Welcome to my todo app.</h3>
            <p> It's just another todo app.</p>
            <input type="submit" name="" value="Login" />
            <br />
          </div>
          <div class="col-md-9 register-right">
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <h3 class="register-heading">Register a New Account.</h3>
                <div class="row register-form">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="First Name *"
                        value=""
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Last Name *"
                        value=""
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Password *"
                        value=""
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Confirm Password *"
                        value=""
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Your Email *"
                        value=""
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        minlength="10"
                        maxlength="10"
                        name="txtEmpPhone"
                        class="form-control"
                        placeholder="Your Phone *"
                        value=""
                      />
                    </div>
                    <div class="form-group">
                      <select class="form-control">
                        <option class="hidden" selected disabled>
                          Please select your Sequrity Question
                        </option>
                        <option>What is your Birthdate?</option>
                        <option>What is Your old Phone Number</option>
                        <option>What is your Pet Name?</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Your Answer *"
                        value=""
                      />
                    </div>
                    <input type="submit" class="btnRegister" value="Register" />
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade show"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
