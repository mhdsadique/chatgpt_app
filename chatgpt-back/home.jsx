import React, { useState } from 'react'

export const Home = () => {
  const [message,setmesasge]=useState("")
  const [response,setresponse]=useState("")

    const handlesubmit=(e)=>{
      e.preventDefault()
      fetch("http://localhost:8000",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({message})
      })
      .then((res)=>res.json())
      .then((data)=>setresponse(data.message))
    }
  return (
    <div>
      <form action=""onSubmit={handlesubmit}>
        <textarea placeholder='Please ask anything' name="" id=""value={message}onChange={(e)=>setmesasge(e.target.value)}>
 </textarea>
 <button type='submit'>submit</button>
      </form>

      <div>{response}</div>
    </div>
  )
}
