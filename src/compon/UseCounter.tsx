import { useState } from "react";


function useCounter(val=0){
    const [countr,setCounter] =useState(val)
    const plus = () => setCounter(count => count+=1)
    const minus = () => setCounter(count => count-=1)
    const reset = () => setCounter(val)


    return{countr ,plus ,minus ,reset}
}
export default useCounter