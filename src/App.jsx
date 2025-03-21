import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Dashboard } from './pages/Dashboard'
import { Send } from './pages/Send'
function App() {

  return (
    <>
     <BrowserRouter>
       <Routes>
       <Route path="/" element={<Navigate to='/signup'></Navigate>} />
       <Route path='/signup' element={<Signup></Signup>}></Route>
       <Route path='/signin' element={<Signin></Signin>}></Route>
       <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
       <Route path='/send' element={<Send></Send>}></Route>
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
