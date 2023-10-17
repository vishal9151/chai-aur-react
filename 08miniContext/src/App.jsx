import { useContext, useState } from 'react'
import './App.css'
import userContext from './context/userContext'
import Body from './Body';

function App() {
  const {user}=useContext(userContext);
  return (
    <>
      <h1>Chai aur React Context {user}</h1>
      <Body/>
    </>
  )
}

export default App
