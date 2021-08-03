import { useState } from "react";
import GeneralInformation from "./General";
import Education from "./Education";
import CVdisplay from "./CVdisplay";
import Experience from "./Experience";

const Form = () => {
    const [formTest, setFormTest] = useState('testing1 ');
    return ( 
        <div className="formWraper">
            <div className="input-container">
      <GeneralInformation test ={formTest} setFormTest = {setFormTest}/>
      <Education />
      <Experience />
      </div>
      {/* add logic for the cv display here*/}
      <CVdisplay />
      <h3>{formTest}</h3>
        </div>
     );
}
 
export default Form;
