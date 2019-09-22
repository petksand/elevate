import React from "react";
import "./BusinessPortal.css";
import RegistrationForm from "./RegistrationForm"

export const BusinessPortal = () => {
  return (
    <div>
      <h1 className="heading" align="center">
        Business Portal
      </h1>
      <div className="form">
        <RegistrationForm></RegistrationForm>
      </div>
      
    </div>
  );
};

export default BusinessPortal;
