import { GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { useContext } from "react";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaWhatsapp,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import Carrousel from "./Carousel/Carrousel";

const RightSideBar = () => {
  
  const {providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();


  const googleLogin = () =>{

    providerLogin(googleProvider)
    .then(result =>{
      const user = result.user;
      console.log(user);
    })
    .catch(error =>{
      console.error(error);
    })
  }


  return (
    <div>
      <div
        className="btn-group-vertical"
        role="group"
        aria-label="Vertical button group"
      >
        <button onClick={googleLogin} type="button" className="btn btn-outline-primary mb-2">
          <FaGoogle /> Sign In With Google
        </button>
        <button type="button" className="btn btn-outline-dark">
          <FaGithub /> Sign In With Github
        </button>
      </div>

      <div className="mt-4">
        <h4>Find Us On</h4>
        <ul className="list-group">
          <li className="list-group-item mb-2">
            <FaFacebook /> Facebook
          </li>
          <li className="list-group-item mb-2">
            <FaWhatsapp /> WhatsApp
          </li>
          <li className="list-group-item mb-2">
            <FaTwitter /> Twitter
          </li>
          <li className="list-group-item mb-2">
            <FaTwitch /> Twitch
          </li>
          <li className="list-group-item mb-2">And a fifth one</li>
        </ul>
      </div>

      <div>
        <Carrousel></Carrousel>
      </div>
    </div>
  );
};

export default RightSideBar;
