// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'


function App() {
  return (
    <main>
      <Navbar />

      <div className='container mx-auto mt-10'>
          <Outlet /> {/* This will render the current route's element (Home, About, Contact) */}
      </div>
    </main>
  )
}

export default App
