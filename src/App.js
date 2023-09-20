import { useState } from "react";
import "./App.css";
import "./components/Form/form";
import Header from "./components/Header/Header";
import Form from "./components/Form/form";
import MyOrg from "./components/MyOrg/MyOrg";


const App = () => {
  
	// const [show, updateShow] = useState(true)
	
	return (
    <div>
      <Header />
      <Form />
      <MyOrg />
    </div>
  );
};

export default App;
