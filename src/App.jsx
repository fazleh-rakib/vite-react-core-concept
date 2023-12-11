
import './App.css'
import SmartPhone from './components/SmarPhone/SmartPhone'
import SmartWatch from './components/SmartWatch/SmartWatch'
import Watch from './components/Watch/Watch'

function App() {


  return (
    <>
     <div style={{border: '2px solid red', margin:'20px', padding:'20px'}}>
      <h2>vite is on</h2>
      <SmartPhone />
      <SmartWatch />
      <Watch />
     </div>
    </>
  )
}

export default App
