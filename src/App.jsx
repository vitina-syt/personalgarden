
// import './App.css'
import RouterRoot from './router'
import {BrowserRouter,Link} from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
    {/* <Link to='/warnlist'>warnlist</Link> */}
    <RouterRoot/>
    </BrowserRouter>
    </>
  )
}

export default App
