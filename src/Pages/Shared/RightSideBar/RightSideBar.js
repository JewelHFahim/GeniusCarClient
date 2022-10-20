import React from "react";
import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaTwitter, FaTwitch } from "react-icons/fa";
import Carrousel from "./Carousel/Carrousel";

const RightSideBar = () => {
  return (
    <div>
      <div
        class="btn-group-vertical"
        role="group"
        aria-label="Vertical button group"
      >
        <button type="button" class="btn btn-outline-primary mb-2">
          <FaGoogle /> Sign In With Google
        </button>
        <button type="button" class="btn btn-outline-dark">
          <FaGithub /> Sign In With Github
        </button>
      </div>

      <div className="mt-4">
        <h4>Find Us On</h4>
        <ul class="list-group">
          <li class="list-group-item mb-2"><FaFacebook/> Facebook</li>
          <li class="list-group-item mb-2"><FaWhatsapp/> WhatsApp</li>
          <li class="list-group-item mb-2"><FaTwitter/> Twitter</li>
          <li class="list-group-item mb-2"><FaTwitch/> Twitch</li>
          <li class="list-group-item mb-2">And a fifth one</li>
        </ul>
      </div>


      <div>
        <Carrousel></Carrousel>
      </div>


    </div>
  );
};

export default RightSideBar;
