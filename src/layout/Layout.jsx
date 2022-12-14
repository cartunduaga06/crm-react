import React from 'react'
import {Outlet, Link, useLocation} from 'react-router-dom'

const Layout = () => {

  const location = useLocation();

  const urlActual = location.pathname;

  return (
    <div className='md:flex md:min-h-screen'>
     
      <div className='md:w-1/4 bg-blue-900 px-5 py-10'>
        <h2 className='text-4xl font-black text-center text-white'>CRM - CLIENTES</h2>
        <nav className='mt-10'>
          <Link to='/clientes' 
          className={`${urlActual==='/clientes'?'text-blue-300':'text-white'} block text-2xl mt-2 font-black mb-5 hover:text-blue-300`}>Clientes</Link>
          <Link to='/clientes/nuevo' 
          className={`${urlActual==='/clientes/nuevo'?'text-blue-300':'text-white'} block text-2xl mt-2 font-black mb-5 hover:text-blue-300`}>Nuevo CLiente</Link>
        </nav>
      </div>

      <div className='md:w-3/4 p-10 overflow-scroll'>
    <Outlet/>
      </div>
       
        
        
    </div>
  )
}

export default Layout