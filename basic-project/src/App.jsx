 import React, { useState } from 'react'
import Login from './assets/components/Login'
import Register from './assets/components/Register'
 
 const App = () => {
  const  [login , setlogin ] = useState(false)
   return (
     <div>
            {login  ? <Login setlogin = {setlogin}  /> : <Register setlogin = {setlogin} />}
     </div>
   )
 }
 
 export default App
 