import { useState } from "react";
import "../MyOrg/MyOrg.css";


const MyOrg = () => {
  const [show, updateShow] = useState(true);

  const handleShow = () => {
    console.log("Show/Hide element", !show);
    updateShow(!show);
  };

  return (
    <section className="orgSection">
      <h3 className="title">My organization </h3>
      <img onClick={handleShow} src="/img/add-btn.svg" alt="add img" />
    </section>
  );
};

export default MyOrg;
