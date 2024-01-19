import { useCallback, useEffect, useState } from "react";

export const APICALLSCREEN = () => {
    const [user,setUser]=useState({})
    const [counter,setCounter]=useState(0)
    const value1=null


const getUserData=useCallback(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/'+(counter+1),{method:"GET"})
    .then((response) => response.json())
    .then((json) =>setTimeout(()=>{setUser(json)},5000) );
},[counter])
 
 // useEffect(getUserData,[counter])
  useEffect(()=>{
    getUserData()
  },[getUserData])
  return <div>
    <p>{user.userId}</p>
    <p>{user.id}</p>
    <p>{user.title}</p>
    <p>{user.body}</p>
    <p>{user.body}</p>
    <button onClick={()=>setCounter(counter+1)}>invrease</button>
  </div>;
};
