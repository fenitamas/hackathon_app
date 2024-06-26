import { LeftNav } from './components/LeftNav'
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"

function App() {

  return (
    <div className='App'>
      <Router>
        <LeftNav/>
        <Routes>
          <Route path='/'/>
          <Route path='/Products'/>
          <Route path='/Services'/>
          <Route path='/Events'/>
          <Route path='/Saved'/>
          <Route path='/Create'/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
