import { GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../../assets/images/login/login.svg";
import { UserContext } from "../../../Context/AuthContext";
import google from "../../../assets/icons/google.png";
import facebook from "../../../assets/icons/facebook.png";
import linkedin from "../../../assets/icons/linkedin.png";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const googleProvider = new GoogleAuthProvider();

  const { createUser, googleSignin } = useContext(UserContext);

  const handleSignin = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .then((error) => console.error(error));
  };

  // const handleGoogle = () =>{
  //   googleSignin(googleProvider)
  //   .then(result =>{
  //     const user = result.user;
  //     console.log(user);
  //   })
  //   .catch(error=>{console.error(error);})
  // }

  const handleGoogle = () => {
    googleSignin(googleProvider)
      .then((result) => {
        const user = result.user;
        fetch("https://genius-car-server-pied.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email: user?.email }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("geniusToken", data.token);
            navigate(from, { replace: true });
          });
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content py-20 flex-col lg:flex-row">
          <div className="text-center w-1/2 lg:text-left my-5">
            <img className="w-3/4" src={login} alt="" />
          </div>

          <div className="card py-5 flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-4xl font-bold text-center">Sign Up</h1>
            <form onSubmit={handleSignin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn bg-[#FF3811] border-0">
                  Sign Up
                </button>
              </div>
              <div className="divider">OR</div>
            </form>
            <div className="flex justify-center">
              <div className="text-center mr-2">
                <button
                  className="google-logo rounded-full bg-base-300 p-2"
                  onClick={handleGoogle}
                >
                  {" "}
                  <img className="rounded-full" src={google} alt="" />{" "}
                </button>
              </div>
              <div className="text-center mr-2">
                <button className="google-logo rounded-full bg-base-300 p-2">
                  {" "}
                  <img className="rounded-full" src={facebook} alt="" />{" "}
                </button>
              </div>
              <div className="text-center mr-2">
                <button className="google-logo rounded-full bg-base-300 p-2">
                  {" "}
                  <img className="rounded-full" src={linkedin} alt="" />{" "}
                </button>
              </div>
            </div>
            <div className="text-center">
              <small>
                Already have an account??
                <Link to="/login" className="text-[#FF3811] font-bold">
                  {" "}
                  Login
                </Link>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
