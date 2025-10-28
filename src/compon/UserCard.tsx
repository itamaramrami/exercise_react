import "./UserCard.css"
import { useContext, useEffect } from "react";
import { UserContext } from "./Usecon";
import {useLocalStorage} from "./UseLocal"
import  useCounter  from "./UseCounter";

const UserCard = () => {
  

  const {storedValue: name, setValue: setName} = useLocalStorage<string>("userName", "");
  const {storedValue, setValue} = useLocalStorage<string>("userEmail", "");
  const { countr, minus, plus, reset } = useCounter(5);
  
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

      <br />
      <br />
      <br />
      <h1>Counter: {countr}</h1>
      <button onClick={plus}>+</button>
      <button onClick={minus}>−</button>
      <button onClick={reset}>אפס</button>


    </div>
  )
}

export default UserCard