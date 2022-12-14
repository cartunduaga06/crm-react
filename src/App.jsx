import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


import Layout from './layout/Layout'
import Inicio from './paginas/Inicio'

import NuevoCliente from './paginas/NuevoCliente'
import EditarCliente from './paginas/EditarCliente'

function App() {
  

  return (
    <BrowserRouter>
      
      <Routes>
        <Route>
          

            <Route path='/Clientes' element={<Layout />} >
                <Route index element={<Inicio/>}/>
                <Route path="nuevo" element={<NuevoCliente/>}/>
                <Route path="editar/:id" element={<EditarCliente/>}/>
              </Route>
        </Route>


      </Routes>
    </BrowserRouter>
  )
}

export default App
