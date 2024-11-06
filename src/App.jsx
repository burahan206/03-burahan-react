import { BrowserRouter , Routes, Route,} from 'react-router-dom'
import Home from './pages/Home'
import Owner from './pages/Owner'
import Nav from './components/Nav'


function App() {

  return (
    <>
     <BrowserRouter>
     <Nav/>
     <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/Owner' element={<Owner/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
