import React, { useState, useEffect } from 'react'
import { Form, Field, Formik, ErrorMessage } from 'formik'
import { Link, useNavigate} from 'react-router-dom'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../state/auth/authActions'
import LoginWithGooglec from '../components/LoginWithGoogle';
import LoginWithGithub from '../components/LoginWithGithub';

const Login = () => {
    const [inputValue, setInputValue] = useState({ email: "", password: "" })
    const user = useSelector((state) => state.auth)
    
    const dispath = useDispatch()
    const navigate = useNavigate()
    
    const renderError = (message) => <small className="text-red-700 text-sm">{message}</small>
    const validationSchema = Yup.object({
        email: Yup.string().required().email(),
        password: Yup.string().required().min(8)
    })

    const onSubmit = (values) => {
        dispath(login(values))
      }
    
      useEffect(()=>{
        if(user.success == true) navigate('/home')
      },[user.success])    

    return (
        <section className="bg-gray-50  dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <Formik
                        initialValues={inputValue}
                        validationSchema={validationSchema}
                        onSubmit={(values, { resetForm }) => {
                            resetForm();
                            onSubmit(values);
                        }
                        }
                    >
                        <Form>
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Sign in to your account
                                </h1>
                                
                                <div className='w-full mb-2 flex justify-between items-center'>
                                     <LoginWithGooglec />
                                     <LoginWithGithub />
                                </div>
                                <div className='w-full flex justify-between items-center '>
                                    <hr className='h-0.5 w-full bg-white' />
                                      <small className='mx-2 text-lg text-white'>or</small>
                                    <hr className='h-0.5 w-full bg-white' />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <Field type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                                    <ErrorMessage name="email" render={renderError} />
                                </div>
                                <div>
                                    <label htmlFor='password' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <Field type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    <ErrorMessage name="password" render={renderError} />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                                        </div>
                                        <div class="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                </div>
                                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <Link to="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                                </p>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </section>
    )
}

export default Login