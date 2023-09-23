// import { useState } from "react";
import "../MyOrg/MyOrg.css";


const MyOrg = (props) => {

  return (
    <section className="orgSection">
      <h3 className="title">My organization </h3>
      <img onClick={props.updateFormShow} src="/img/add-btn.svg" alt="add img" />
    </section>
  );
};

export default MyOrg;
