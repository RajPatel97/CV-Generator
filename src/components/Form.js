import { useState } from "react";
import GeneralInformation from "./General";
import Education from "./Education";
import CVdisplay from "./CVdisplay";
import Experience from "./Experience";

const Form = () => {
    const [formTest, setFormTest] = useState('testing1 ');

    //for General Information 
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');

    //for Education 
    const [universityName, setUniversityName] = useState('')
    const [yearsAttended, setYearsAttended] = useState('')
    const [major, setMajor] = useState('')

    //for experience 
    const [jobTitle,setJobTitle ] = useState('')
    const [employer, setEmployer] = useState('')
    const [descriptionExperience, setDescriptionExperience] = useState('')
    const [yearsEmployed, setYearsEmployed] = useState('')


    return ( 
        <div className="formWraper">
            <div className="input-container">
      <GeneralInformation test ={formTest} setFormTest = {setFormTest}
          firstName={firstName} setFirstName={setFirstName}
          lastName={lastName} setLastName={setLastName}
          address={address} setAddress={setAddress}
          phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}
          email={email} setEmail={setEmail}
          description={description} setDescription={setDescription}

      />
      <Education
        universityName = {universityName} setUniversityName = {setUniversityName}
        yearsAttended = {yearsAttended} setYearsAttended = {setYearsAttended}
        major= {major} setMajor = {setMajor}

       />
      <Experience
        jobTitle = {jobTitle} setJobTitle = {setJobTitle}
        employer =  {employer} setEmployer = {setEmployer}
        descriptionExperience = {descriptionExperience} setDescriptionExperience = {setDescriptionExperience}
        yearsAttended = {yearsAttended} setYearsAttended = {setYearsAttended}
       />
      </div>
      {/* add logic for the cv display here*/}
      <CVdisplay
        firstName={firstName} setFirstName={setFirstName}
        lastName={lastName} setLastName={setLastName}
        address={address} setAddress={setAddress}
        phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}
        email={email} setEmail={setEmail}
        description={description} setDescription={setDescription}

        universityName = {universityName} setUniversityName = {setUniversityName}
        yearsAttended = {yearsAttended} setYearsAttended = {setYearsAttended}
        major= {major} setMajor = {setMajor}

        jobTitle = {jobTitle} setJobTitle = {setJobTitle}
        employer =  {employer} setEmployer = {setEmployer}
        descriptionExperience = {descriptionExperience} setDescriptionExperience = {setDescriptionExperience}
        yearsAttended = {yearsAttended} setYearsAttended = {setYearsAttended}

      
       />
      <h3>{formTest}</h3>
        </div>
     );
}
 
export default Form;
