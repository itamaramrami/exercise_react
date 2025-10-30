import { useState } from "react";

// export function useLocalStorage<T>(key: string, initialValue: T) {
//   const [storedValue, setStoredValue] = useState<T>(() => {
    
//       const item = localStorage.getItem(key);
      
//       return item ? JSON.parse(item) : initialValue;
    
//   });

//   const setValue = (value: T) => {
//     try {
//       setStoredValue(value);
//       localStorage.setItem(key, JSON.stringify(value));
//     } catch (error) {
//       console.error("Error saving to localStorage", error);
//     }
//   };

//   return {storedValue, setValue} as const;
// }

export  function useLocalStorage<T>(key:string,initialValue: T){
  const [val,setVal]=useState(()=>{
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) :initialValue
  }
)
const setValue =(val:T)=>{
  try {
    setVal(val);
    localStorage.setItem(key,JSON.stringify(val));

  } catch (error) {
    console.error("Error saving to localStorage", error);
  }
}
return {val,setValue}as const
}
