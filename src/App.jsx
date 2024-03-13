import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import QueryPage from './pages/QueryPage'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='query' element={<QueryPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App