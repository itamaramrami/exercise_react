import "./UserCard.css"
import { useContext, useEffect } from "react";
import { UserContext } from "./Usecon";
import {useLocalStorage} from "./UseLocal"

const UserCard = () => {
  

  const [name, setName] = useLocalStorage<string>("userName", "");
  const [email, setEmail] = useLocalStorage<string>("userEmail", "");
  
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
      <input type="text" placeholder="entar your name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="entar your email" value={email} onChange={(e) => setEmail(e.target.value)} />
<br />
<br />
      <button onClick={() => console.log("Name:", name, "Email:", email)}>
        Print Data
      </button>


    </div>
  )
}

export default UserCard