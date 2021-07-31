import { useState } from "react";



const CVdisplay = (props) => {

    const test = ()=>{
        console.log(props);

}
    return (
        <div className="input-container">
        <header className="displayHeader">This is the header</header>
        {test()}

        </div>
      );
}
 
export default CVdisplay;