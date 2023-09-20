import { useState } from "react";
import "./App.css";
import "./components/Form/form";
import Header from "./components/Header/Header";
import Form from "./components/Form/form";
import MyOrg from "./components/MyOrg/MyOrg";

const App = () => {


  const [initialForm, updateForm] = useState(true)
  const updateFormShow = () =>{
    updateForm(!initialForm)
  }
  
  return (
    <div>
      <Header />
      {initialForm === true ? <Form/> : <div></div>}
      <MyOrg updateFormShow={updateFormShow}/>
    </div>
  );
};

export default App;
