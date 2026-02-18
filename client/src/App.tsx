import { useState, useEffect } from 'react'

import './App.css'
import { checkHealth } from "./api/health";
function App() {
  const [status, setStatus] = useState("");

  useEffect(() => {
    checkHealth().then(data => setStatus(data.status))
  }, []);

  return (
    <>

      <h1>Timothy</h1>
      <h2>Bakcend Timothy is the goat</h2>

    </>
  )
}

export default App
