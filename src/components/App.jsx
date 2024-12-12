import NavBar from './NavBar.jsx'
import '../stylesheets/App.css'
import {useState} from 'react'

function App() {
  const [mode, setMode] = useState(false);

  const changeMode = () => {
    setMode(!mode);
    document.body.classList.toggle("nightMode", !mode);
}

  return (
    <>
      <NavBar mode={mode} changeMode={changeMode}/>
    </>
  )
}

export default App
