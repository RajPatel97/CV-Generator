import { useState } from 'react';

const GeneralInformation = (props) => {
  const test = props.test;
  const setFormTest = props.setFormTest;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const handleClick=()=>{
    //adds update to the cv with the data above once clicked
    console.log(firstName,lastName,address,phoneNumber,email,description);
    setFormTest("testing new");
    
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
        <h1>{test}</h1>

      </div>
      );
}

export default GeneralInformation