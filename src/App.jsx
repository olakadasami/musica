import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import HomeLayout from './pages/HomeLayout'
function App() {

  return (
    <div className="bg-dark h-screen text-light">

      <Routes>
        <Route path='/' element={<HomeLayout />} >
          <Route index element={<Home />} />
        </Route>
      </Routes>

    </div>
  )
}

export default App
