import React from 'react'
import UserProvider  from './compon/Usecon'

import './App.css'
import UserCard from './compon/UserCard'

function App() {
  

  return (
    <div>
    <UserProvider >
    <UserCard></UserCard>
    </UserProvider >
    </div>
   
  )
}

export default App
