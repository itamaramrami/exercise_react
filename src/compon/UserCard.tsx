import "./UserCard.css"
import { useContext,useEffect } from "react";
import { UserContext } from "./Usecon";

const UserCard = () => {
    const context = useContext(UserContext);
    if (!context)return null
    const { name, setName, email, setEmail } = context
    
    const SetLocal = () => {
    const userData = { name, email };
    localStorage.setItem("userData", JSON.stringify(userData));
    console.log(localStorage.getItem("userData"));
    
    
  };
  
    
    useEffect(() => {
    if (email === "") return; 

    const timer = setTimeout(() => {
      alert(`email is changed: ${email}`);
      localStorage.setItem("email", JSON.stringify({ email }));
      
    }, 800); 
    
    

    return () => clearTimeout(timer); 
  }, [email]);
  return (
    

    <div className="card">
        <input type="text" placeholder="entar your name" value={name} onChange={(e)=> setName(e.target.value)} />
        <input type="text" placeholder="entar your email" value={email} onChange={(e)=>setEmail( e.target.value)} />
        
        <br />
        <br />
        <button onClick={SetLocal}>Save</button>
        

    </div>
  )
}

export default UserCard