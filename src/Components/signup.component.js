import React, { Component, useState } from 'react'

// export default class SignUp extends Component {
//   render() {
//     return (
//       <form>
//         <h3>Sign Up</h3>

//         <div className="mb-3">
//           <label>First name</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="First name"
//           />
//         </div>

//         <div className="mb-3">
//           <label>Last name</label>
//           <input type="text" className="form-control" placeholder="Last name" />
//         </div>

//         <div className="mb-3">
//           <label>Email address</label>
//           <input
//             type="email"
//             className="form-control"
//             placeholder="Enter email"
//           />
//         </div>

//         <div className="mb-3">
//           <label>Password</label>
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Enter password"
//           />
//         </div>

//         <div className="d-grid">
//           <button type="submit" className="btn btn-primary">
//             Sign Up
//           </button>
//         </div>
//         <p className="forgot-password text-right">
//           Already registered <a href="/sign-in">sign in?</a>
//         </p>
//       </form>
//     )
//   }
// }


import heroImage from "./hero.png";

const Registration = () => {
  const [userRegister, setUserRegister] = useState({
    username: "",
    phone: "",
    password: "",
    repeatpassword: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserRegister({ ...userRegister, [name]: value });
  };

  return (
    <>
      <section className="loginsection register-section ">
        <div className="container grid grid-two-column">
          <div className="login-image">
            </div>
          {/* right side div  */}
          <div className="login-data register-data">
            <img src={heroImage} className="logo-image" alt="logo" />
            <p className="bold-text">Create Your Account!</p>
            <p className="common-para register-para">
              --------------------------------------------------------
            </p>
            {/* form start  */}
            <form action="#">
              <div className="form">
                <input
                  type="text"
                  id="email"
                  className="form__input"
                  placeholder=" "
                  name="username"
                  value={userRegister.username}
                  onChange={handleInput}
                />
                <label htmlFor="email" className="form__label">
                  Email Address
                </label>
              </div>

              {/* for mobile number  */}
              <div className="form">
                <input
                  type="text"
                  id="phone"
                  className="form__input"
                  placeholder=" "
                  name="phone"
                  value={userRegister.phone}
                  onChange={handleInput}
                />
                <label htmlFor="phone" className="form__label">
                  Contact No.
                </label>
              </div>

              <div className="form">
                <input
                  type="password"
                  id="pasword"
                  className="form__input"
                  placeholder=" "
                  name="password"
                  value={userRegister.password}
                  onChange={handleInput}
                />
                <label htmlFor="pasword" className="form__label">
                  Pasword
                </label>
              </div>

              <div className="form">
                <input
                  type="text"
                  id="repeat password"
                  className="form__input"
                  placeholder=" "
                  name="repeatpassword"
                  value={userRegister.repeatpassword}
                  onChange={handleInput}
                />
                <label htmlFor="repeat password" className="form__label">
                  Address
                </label>
              </div>

              <div className="checkbox">
                <input type="checkbox" />
                <p className="common-para">
                  By clicking the checkbox, I agree to this.
                </p>
              </div>
              

              <input
                type="submit"
                value="REGISTER"
                className="btn register-btn"
              />
            </form>
            

            {/* <p className="common-para">
              or join us with your social network account
            </p>
            <div className="social-btn">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-solid fa-m"></i>
              <i className="fa-brands fa-linkedin-in"></i>
            </div> */}
            <p className="common-para">
              Already have an account with us? <a href="#"> Login </a> here
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;
