import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'

const Formulario = () => {
  return (
    <div className='bg-white mt-10 px-5 py-10  rounded-md shadow-md md:w-3/4 mx-auto '>
        
        <h1 className='text-gray-600  font-bold text-xl uppercase text-center  '>Agregar Cliente</h1>
    
        <Formik>
            <Form>
                <div className='mb-4'>
                    <label className='block text-gray-800 text-sm font-bold mb-2' htmlFor='nombre'>Nombre</label>
                    <Field className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='nombre' type='text' placeholder='Nombre de Cliente'/>
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='apellido'>Apellido</label>
                    <Field className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='apellido' type='text' placeholder='Apellido Cliente'/>
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='empresa'>Empresa</label>
                    <Field className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='empresa' type='text' placeholder='Empresa Cliente'/>
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>Email</label>
                    <Field className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='email' type='email' placeholder='Email Cliente'/>

                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='telefono'>Telefono</label>
                    <Field className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='telefono' type='tel' placeholder='Telefono Cliente'/>
                </div>
                <div className='mb-4'>
                   <label className='block text-gray-700 text-sm font-bold mb-2 ' htmlFor='telefono'>Notas</label>
                     <Field  as="textarea"className='h-40shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='notas' type='text' placeholder='Notas'/>
                 </div>
                <input className='bg-blue-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-gray-900' type='submit' value='Registrar Cliente'/>
                </Form>
        </Formik>

    
    </div>
  )
}

export default Formulario