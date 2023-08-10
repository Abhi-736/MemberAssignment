import React from "react";
/* import Details from "./text.json"; */

const Home = () => {
  const [DetailsArray,setDetailsArray]= React.useState(JSON.parse(localStorage.getItem("Employee"))||
    [
    {"Name":"Akash", "age":22, "Profession": "java developer", "Team":"A"},
    {"Name":"Akashi", "age":21, "Profession": "Node developer", "Team":"B"},
    {"Name":"ekash", "age":20, "Profession": "React developer", "Team":"C"},
    {"Name":"qkash", "age":19, "Profession": "Spring developer", "Team":"B"},
    {"Name":"skash", "age":24, "Profession": "C developer", "Team":"A"},
    {"Name":"zkash", "age":23, "Profession": "Rust developer", "Team":"C"},
    {"Name":"xkash", "age":25, "Profession": "Go developer", "Team":"A"},
    {"Name":"bkash", "age":26, "Profession": "Rust developer", "Team":"C"}
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
    <div className='Home1 container text-center'>
     <div className="row">
      <select className="form-select text-center my-3 mx-auto" style={{width:"300px"}} onChange={(e)=>setTeam(e.target.value)} value={selectedTeam}>
        <option className="text-center" value='A'>Team A</option>
        <option className="text-center" value='B'>Team B</option>
        <option className="text-center" value='C'>Team C</option>
      </select>
      </div>
    
      <div className="row g-2">
      {DetailsArray.map((value,id) => {
        return<Card Value={value} handlecardchange={handlecardchange} selectedTeam={selectedTeam} key={id} /> ;
      })}
      </div>
    </div>
  );
};
const Card = ({Value, handlecardchange, selectedTeam}) => {
  const {Name, age, Profession, Team}= Value;

const handleChange=(Name)=>{
  handlecardchange(Name)}

  return (
    <div className={`card col-4 ${Team===selectedTeam?'activated':''}` }   onClick={()=>handleChange(Name)}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Name: {Name}</h5>
    <p className="card-text">Age: {age}</p>
    <p className="card-text">Profession: {Profession}</p>
    <a href="www.youtube.com" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  )
}

export default Home;
