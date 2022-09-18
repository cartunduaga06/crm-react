import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import {Navigate, useNavigate} from 'react-router-dom'

const Formulario = () => {
    const navigate = useNavigate()

    const validationSchema = Yup.object().shape({
        nombre: Yup.string()
            .required('El nombre es obligatorio')
            .min(4, 'El nombre debe tener al menos 4 caracteres')
            .max(10, 'El nombre debe tener como máximo 50 caracteres'),
        apellido: Yup.string().required('El apellido es obligatorio'),
        email: Yup.string().email('El email no es válido').required('El email es obligatorio'),
        empresa: Yup.string().required('La empresa es obligatoria'),
        telefono: Yup.string().required('El teléfono es obligatorio')

    })

    const handleSubmit = async (values) => {
        
        try {
            const url = 'http://localhost:4001/clientes'
            const respuesta =  await fetch(url, {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const resultado = await respuesta.json()
            console.log(resultado)
            navigate('/clientes')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='bg-white mt-10 px-5 py-10  rounded-md shadow-md md:w-3/4 mx-auto '>

            <h1 className='text-gray-600  font-bold text-xl uppercase text-center  '>Agregar Cliente</h1>

            <Formik
                initialValues={{
                    nombre: '',
                    apellido: '',
                    empresa: '',
                    email: '',
                    telefono: '',
                    notas: ''
                }}

                onSubmit={async(values, {resetForm}) => {
                   await handleSubmit(values)
                    resetForm()
                }}

                validationSchema={validationSchema}

            >

                {({ errors, touched }) => {

                    return (


                        <Form className='mt-10'>
                            <div className='mb-4'>
                                <label className='block text-gray-800 text-sm font-bold mb-2' htmlFor='nombre'>Nombre</label>
                                <Field className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' name='nombre' id='nombre' type='text' placeholder='Nombre de Cliente' />
                                {errors.nombre && touched.nombre ? (
                                    <div className='my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4'>
                                        <p className='font-bold'>Error</p>
                                        <p>{errors.nombre}</p>
                                    </div>
                                ) : null}
                            </div>
                            <div className='mb-4'>
                                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='apellido'>Apellido</label>
                                <Field className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' name='apellido' id='apellido' type='text' placeholder='Apellido Cliente' />
                                {errors.apellido && touched.apellido ? (
                                    <div className='my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4'>
                                        <p className='font-bold'>Error</p>
                                        <p>{errors.apellido}</p>
                                    </div>
                                ) : null}



                            </div>
                            <div className='mb-4'>
                                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='empresa'>Empresa</label>
                                <Field className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' name='empresa' id='empresa' type='text' placeholder='Empresa Cliente' />
                                {errors.empresa && touched.empresa ? (
                                    <div className='my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4'>
                                        <p className='font-bold'>Error</p>
                                        <p>{errors.empresa}</p>
                                    </div>
                                ) : null}

                            </div>
                            <div className='mb-4'>
                                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>Email</label>
                                <Field className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' name='email' id='email' type='email' placeholder='Email Cliente' />
                                {errors.email && touched.email ? (
                                    <div className='my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4'>
                                        <p className='font-bold'>Error</p>
                                        <p>{errors.email}</p>
                                    </div>
                                ) : null}
                            </div>
                            <div className='mb-4'>
                                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='telefono'>Telefono</label>
                                <Field className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' name='telefono' id='telefono' type='tel' placeholder='Telefono Cliente' />
                                {errors.telefono && touched.telefono ? (
                                    <div className='my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4'>
                                        <p className='font-bold'>Error</p>
                                        <p>{errors.telefono}</p>
                                        </div>
                                ) : null}

                            </div>
                            <div className='mb-4'>
                                <label className='block text-gray-700 text-sm font-bold mb-2 ' htmlFor='telefono'>Notas</label>
                                <Field as="textarea" className='h-40shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' name='notas' id='notas' type='text' placeholder='Notas' />
                                    

                            </div>
                            <input className='bg-blue-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-gray-900' type='submit' value='Registrar Cliente' />
                        </Form>
                    )
                }
                }
            </Formik>


        </div>
    )
}

export default Formulario