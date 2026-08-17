 import React, { useState } from 'react'
import Login from './assets/components/Login'
import Register from './assets/components/Register'
 
 const App = () => {
  const  [login , setlogin ] = useState(true)
   return (
     <div>
            {login  ? <Login  /> : <Register/>}
     </div>
   )
 }
 
 export default App
 