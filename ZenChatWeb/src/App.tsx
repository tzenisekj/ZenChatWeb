import { Routes, Route } from 'react-router-dom'; 
import Login from './Pages/login' 
import Registration from './Pages/registration'; 
import Dashboard from './Pages/dashboard'; 
import ErrorPage from './Pages/errorPage'; 

function App() {

  return (
    <Routes>
      <Route path="/" >
        {/*Open routes*/}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />

        {/*Protected routes*/}
        <Route path="/:id" element={<Dashboard />} />

        {/*Catch all route 404*/}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  )
}

export default App
