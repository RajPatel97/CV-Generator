import { useState } from "react";



const CVdisplay = (props) => {

    const firstName=props.firstName
    const setFirstName=props.setFirstName
    const lastName=props.lastName
    const setLastName=props.setLastName
    const address=props.address
    const setAddress=props.setAddress
    const phoneNumber=props.phoneNumber
    const setPhoneNumber=props.setPhoneNumber
    const email=props.email
    const setEmail=props.setEmail
    const description=props.description
    const setDescription=props.setDescription
    const universityName = props.universityName
    const setUniversityName = props.setUniversityName
    const yearsAttended = props.yearsAttended
    const setYearsAttended = props.setYearsAttended
    const major= props.major
    const setMajor = props.setMajor
    const jobTitle = props.jobTitle
    const setJobTitle = props.setJobTitle
    const employer =  props.employer
    const setEmployer = props.setEmployer
    const descriptionExperience = props.descriptionExperience
    const setDescriptionExperience = props.setDescriptionExperience
    const yearsEmployed = props.yearsEmployed
    const setYearsEmployed = props.setYearsEmployed

    return (
        <div className="input-container">
        <header className="displayHeader">This is the header</header>


        </div>
      );
}
 
export default CVdisplay;
