import React, { useEffect, useState } from 'react'

function App() {
  const [rollno,setRollno]=useState();
  const [sname,setSname]=useState();
  const [age ,setAge]= useState();
  useEffect(()=>{
    console.log("Hello Every I m useEffect Running")
  },[rollno,sname])
  return (
    <div>
      Roll No: <input type="text" value={rollno} 
      onChange={(e)=>{setRollno(e.target.value)}} /> <br/>
      Name :<input type="text" value={sname} 
      onChange={(e)=>{setSname (e.target.value)}}
      /><br/>
      Age :<input type="text" value ={age} 
      onChange={(e)=>{setAge(e.target.value)}} />
    </div>
  )
}

export default App
