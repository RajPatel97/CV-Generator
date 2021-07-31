import { useState } from "react"

const Experience = () => {
    const [jobTitle,setJobTitle ] = useState('')
    const [employer, setEmployer] = useState('')
    const [description, setDescription] = useState('')
    const [yearsEmployed, setYearsEmployed] = useState('')

    const handleClick=()=>{
        //adds update to the cv with the data above once clicked
        console.log(jobTitle,employer,description,yearsEmployed);
      }

    return (
        <div className="experience-wrapper">
        <h2 className="title">Experience</h2>
        <input type="text" placeholder = "Job Title" class = "inputStyle" onChange={event => setJobTitle(event.target.value)}/>
        <input type="text" placeholder = "Employer" class = "inputStyle" onChange={event => setEmployer(event.target.value)}/>
        <input type="text" placeholder = "Description" class = "inputStyle" onChange={event => setDescription(event.target.value)}/>
        <input type="text" placeholder = "Years Employed" class = "inputStyle" onChange={event => setYearsEmployed(event.target.value)}/>
        <button className="submit" onClick = {handleClick}>Submit</button>

        </div>
      );
}
 
export default Experience;