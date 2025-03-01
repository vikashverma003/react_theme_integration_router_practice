import { useState } from 'react'

import End from './components/pages/end'
import Navbar from './components/pages/Navbar'
import Sidebar from './components/pages/Sidebar'
import Start from './components/pages/Start'
import Email from './components/pages/Email'
import Email1 from './components/pages/Email1'
import Alert from './components/pages/Alert'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <>
      {/* <Start/> */}    
        <Navbar/>
        <div class="h-screen flex flex-row flex-wrap">
            <Sidebar />
            <Routes>
              {/* <Route path="/" element={<Navbar/>} /> */}
              <Route path="/email1" element={<Email1 />} />
              <Route path="/alert" element={<Alert />} />
              <Route path="/ " element={<Alert />} />

            </Routes>

        </div> 
    </>
    </BrowserRouter>
  )
}

export default App
