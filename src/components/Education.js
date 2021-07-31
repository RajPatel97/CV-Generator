import { useState } from 'react';
const Education = () => {

    const [universityName, setUniversityName] = useState('')
    const [yearsAttended, setYearsAttended] = useState('')
    const [major, setMajor] = useState('')

    const handleClick=()=>{
        //adds update to the cv with the data above once clicked
        console.log(universityName,yearsAttended,major);
      }

    return (
        <div className="education-wrapper">
        <h2 className="title">Education</h2>
        <input type="text" placeholder = "University Name" class = "inputStyle" onChange={event => setUniversityName(event.target.value)}/>
        <input type="text" placeholder = "Years Attended" class = "inputStyle" onChange={event => setYearsAttended(event.target.value)}/>
        <input type="text" placeholder = "Major" class = "inputStyle" onChange={event => setMajor(event.target.value)}/>
        <button className="submit" onClick = {handleClick}>Submit</button>
        </div>
      );
}
 
export default Education;