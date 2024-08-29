
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { lazy, Suspense } from 'react';

const ProductDetails = lazy(() => import('./pages/ProductDetails'))
const CompareProducts = lazy(() => import('./pages/CompareProducts'))

function App() {

  return (
    <>
      <Router>
        <Sidebar/>
        <Navbar/>
        <div className="ml-64 pt-7">
          <Suspense fallback={<div>Loading</div>}>
        <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
          <Route path="/products" element={<ProductDetails/>} />
          <Route path="/compare" element={<CompareProducts/>} />
        </Routes>
        </Suspense>
        </div>
      </Router>
    </>
  )
}

export default App
