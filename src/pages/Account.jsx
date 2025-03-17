// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Helmet } from "react-helmet";

const Account = () => {
    return (
        <section>
            <Helmet>
                <title>Account</title>
                <meta name="description" content="Your Account" />
            </Helmet>

            <article className='grid w-full grid-cols-1 gap-6 p-4 h-fit md:grid-cols-2'>

                {/* Register */}
                <form className='flex flex-col gap-5 p-6 bg-white border-none rounded-lg shadow-md font-bodyFF w-fit'>
                    <h2 className='text-2xl font-bold text-pryClr font-headingFF'>Sign up</h2>

                    <div className='flex items-center max-w-full border rounded-md border-pryClr w-96'>
                        <input
                            className='w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pryClr'
                            type="email"
                            placeholder='Email Address'
                        />
                    </div>

                    <div className='flex items-center max-w-full border rounded-md border-pryClr w-96'>
                        <input
                            className='w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pryClr'
                            type="password"
                            pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
                            title='Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
                            placeholder='Password'
                        />
                    </div>

                    <p className='text-sm text-gray-400 font-bodyFF'>
                        We use your data to manage your account and enhance your experience. See our privacy policy for more details.
                    </p>

                    <button 
                        type="submit"
                        className='p-3 text-white transition duration-200 rounded-md bg-pryClr hover:bg-pryClr/80'
                    >
                        Create Account
                    </button>
                </form>

                {/* Sign in */}
                <form className='flex flex-col gap-5 p-6 bg-white border-none rounded-lg shadow-md font-bodyFF w-fit'>
                    <h2 className='text-2xl font-bold font-headingFF text-pryClr'>Sign In</h2>

                    <div className='flex items-center max-w-full border rounded-md border-pryClr w-96'>
                        <input
                            className='w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pryClr'
                            type="email"
                            placeholder='Email Address'
                        />
                    </div>

                    <div className='flex items-center max-w-full border rounded-md border-pryClr w-96'>
                        <input
                            className='w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pryClr'
                            type="password"
                            pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
                            title='Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
                            placeholder='Password'
                        />
                    </div>

                    <button 
                        type="submit"
                        className='p-3 text-white transition duration-200 rounded-md bg-pryClr hover:bg-pryClr/80'
                    >
                        Login
                    </button>
                </form>

            </article>
        </section>
    )
}

export default Account;
