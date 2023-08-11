import React from "react";
import male from "../Images/male.jpeg";
import female from "../Images/female.jpeg";
/* import Details from "./text.json"; */

const Home = () => {
  const [DetailsArray,setDetailsArray]= React.useState(JSON.parse(localStorage.getItem("Employee"))||
    [
    {"Name":"Akash", "age":22, "Profession": "java developer", "Team":"A", "Gender":"Male"},
    {"Name":"Akashi", "age":21, "Profession": "Node developer", "Team":"B", "Gender":"Female"},
    {"Name":"ekash", "age":20, "Profession": "React developer", "Team":"C", "Gender":"Female"},
    {"Name":"qkash", "age":19, "Profession": "Spring developer", "Team":"B", "Gender":"Male"},
    {"Name":"skash", "age":24, "Profession": "C developer", "Team":"A", "Gender":"Female"},
    {"Name":"zkash", "age":23, "Profession": "Rust developer", "Team":"C", "Gender":"Male"},
    {"Name":"xkash", "age":25, "Profession": "Go developer", "Team":"A", "Gender":"Female"},
    {"Name":"bkash", "age":26, "Profession": "Rust developer", "Team":"C", "Gender":"Male"}
    ]
    
    );
  const [selectedTeam,setTeam]= React.useState(JSON.parse(localStorage.getItem("selectedTeam"))||'A');

  const handlecardchange=(Selectedemployee)=>{
    console.log(Selectedemployee)
    
    const updatedArray=DetailsArray.map((employee)=> 
    employee.Name===Selectedemployee?
    (employee.Team===selectedTeam?{...employee,"Team":''}:{...employee,"Team":selectedTeam}):employee)
  setDetailsArray(updatedArray) 
  };

  React.useEffect(()=>{
    localStorage.setItem("Employee", JSON.stringify(DetailsArray))
  }, [DetailsArray])

  React.useEffect(()=>{
    localStorage.setItem('selectedTeam',JSON.stringify(selectedTeam))
}, [selectedTeam])
  

  return (
    <div className='Home1 container text-center' style={{width:"50%"}}>
     <div className="row ">
      <select className="form-select text-center my-3 mx-auto" style={{width:"300px"}} onChange={(e)=>setTeam(e.target.value)} value={selectedTeam}>
        <option className="text-center" value='A'>Team A</option>
        <option className="text-center" value='B'>Team B</option>
        <option className="text-center" value='C'>Team C</option>
      </select>
      </div>
    
      <div className="row g-2 ">
      {DetailsArray.map((value,id) => {
        return<Card Value={value} handlecardchange={handlecardchange} selectedTeam={selectedTeam} key={id} /> ;
      })}
      </div>
    </div>
  );
};
const Card = ({Value, handlecardchange, selectedTeam}) => {
  const {Name, age, Profession, Team, Gender}= Value;

const handleChange=(Name)=>{
  handlecardchange(Name)}

  return (
    <div className={`card col-4 ${Team===selectedTeam?'activated':''}` } style={{cursor:"pointer", }}   onClick={()=>handleChange(Name)}>
  <img src={`${Gender==="Male"?male:female}`} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Name: {Name}</h5>
    <p className="card-text">Age: {age}</p>
    <p className="card-text">Profession: {Profession}</p>
    
  </div>
</div>
  )
}

export default Home;
