import { useState } from 'react';

const GeneralInformation = (props) => {




  const firstName = props.firstName;
  const setFirstName = props.setFirstName;
  const lastName = props.lastName;
  const setLastName = props.setLastName;
  const address = props.address;
  const setAddress = props.setAddress;
  const phoneNumber = props.phoneNumber;
  const setPhoneNumber = props.setPhoneNumber;
  const email = props.email;
  const setEmail = props.setEmail;
  const description = props.description;
  const setDescription = props.setDescription;

  const handleClick=()=>{
    //adds update to the cv with the data above once clicked
    console.log(firstName,lastName,address,phoneNumber,email,description);
    
  }

    return (
      <div>
        <h2 className="title">Personal Information</h2>
        <input type="text" placeholder = "First Name" class = "inputStyle" onChange={event => setFirstName(event.target.value)}/>
        <input type="text" placeholder = "Last Name" class = "inputStyle" onChange={event => setLastName(event.target.value)}/>
        <input type="text" placeholder = "Address" class = "inputStyle" onChange={event => setAddress(event.target.value)}/>
        <input type="text" placeholder = "Phone Number" class = "inputStyle" onChange={event => setPhoneNumber(event.target.value)}/>
        <input type="text" placeholder = "Email" class = "inputStyle" onChange={event => setEmail(event.target.value)}/>
        <input type="text" placeholder = "Description" id = "description-inputStyle" class = "inputStyle" onChange={event => setDescription(event.target.value)}/>
        <button className="submit" onClick = {handleClick}>Submit</button>

      </div>
      );
}

export default GeneralInformation