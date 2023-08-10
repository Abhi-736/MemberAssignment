import React from 'react'

const Blog = () => {

const [employee,setEmployee] = React.useState(JSON.parse(localStorage.getItem("Employee")));
const [selectedTeamEmployee, setSelectedTeamEmployee]= React.useState('')
const [selectedTeam,setSelectedTeam] = React.useState(JSON.parse(localStorage.getItem("selectedTeam")) || "A");
console.log(selectedTeam);

/* const handleChange=(e)=>{
setSelectedTeam(e.target.value)
console.log(selectedTeam)
const selectedEmployeeArray=employee.filter((employ)=>employ.Team==selectedTeam);

setSelectedTeamEmployee(selectedEmployeeArray)
} */

React.useEffect(()=>{const selectedEmployeeArray=employee.filter((employ)=>employ.Team==selectedTeam);

setSelectedTeamEmployee(selectedEmployeeArray)
},[selectedTeam]
)
console.log(selectedTeamEmployee)
  return (
    <div className='containier-md '>
       <select className="form-select text-center my-3 mx-auto" style={{width:"300px"}} value={selectedTeam} onChange={(e)=>setSelectedTeam(e.target.value)}>
        <option className="text-center" value='A'>Team A</option>
        <option className="text-center" value='B'>Team B</option>
        <option className="text-center" value='C'>Team C</option>
      </select>
{selectedTeamEmployee.length && selectedTeamEmployee.map((employeee,id,array)=><div className='row'>
  <div className='col'>Name: {employeee.Name}</div>
  <div className='col'>Age: {employeee.age}</div>
  <div className='col'>Members: {array.length}</div>
</div>)}

    </div>
  )
}

export default Blog