import React from "react";
import "./Section1.css";
import NavBar from "./NavBar/NavBar";
import Page1Content from "./Page Center/Page1Content"
function Section1(proto) {

  return (
    <div className="section1">
       <NavBar/>
       <Page1Content users ={proto.users}/>
    </div>
  );
}

export default Section1;
