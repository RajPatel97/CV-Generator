
const CVdisplay = (props) => {

    const firstName = props.firstName;
    const lastName = props.lastName;
    const address = props.address;
    const phoneNumber = props.phoneNumber;
    const email = props.email;
    const description = props.description;
    const universityName = props.universityName;
    const yearsAttended = props.yearsAttended;
    const major = props.major;
    const jobTitle = props.jobTitle
    const employer = props.employer
    const descriptionExperience = props.descriptionExperience
    const yearsEmployed = props.yearsEmployed

    const handleClick=()=>{
        //adds update to the cv with the data above once clicked
      }


    return (
        <div className="wrapper">
        <h1 className="displayHeader">{firstName +' '+lastName}</h1>

        </div>
      );
}
 
export default CVdisplay;