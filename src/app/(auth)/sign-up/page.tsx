'use client'

import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { toast } from 'react-toastify'
import Link from 'next/link'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { Loader2 } from 'lucide-react'
import { redirect } from 'next/navigation'

const BASE_URL = String(process.env.BASE_URL)


const Page = () => {

    const [loading, setLoading] = useState(false)
    const { register, handleSubmit } = useForm()

    const handleRegister = async (payload) => {
        setLoading(true)

        try {
            // TODO: hide the api in saprate file or .env 
            const response = await axios.post(`http://localhost:3000/api/sign-up`,
                {
                    email: payload.email,
                    fullName: payload.fullName,
                    password: payload.password
                },
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );

            if (!response) {
                console.log('something went wrong while user registration')
            }

            console.log(response.data)
            toast(response.data.message)


            // redirect to login page
            if (response.data.status == 201) {
                setTimeout(() => {
                    redirect('/log-in')
                }, 1000);
            }

            setLoading(false)
        } catch (error) {
            console.log('Client ERR: User Reg.: ', error)
            toast('Something went wrong !')
        }
        setLoading(false)
    }

    return (
        <section className='dark:bg-gray-800 h-screen w-full  text-sm'>
            <div className='grid grid-cols-2'>

                <div className='col-span-1'>
                    <div className='flex justify-center items-center h-screen bg-blue-400'>

                        {/* <img src="./yt-logo.svg" alt="" /> */}
                    </div>
                </div>

                <div className='w-full'>
                    <Card className='bg-transparent border border-gray-500 outline-none  relative top-10 px-24  flex flex-col justify-center   border-none'>
                        <CardHeader className='text-center'>
                            <CardTitle className='font-extrabold text-2xl'>Create Your Account</CardTitle>
                            
                        </CardHeader>

                        <form onSubmit={handleSubmit(handleRegister)}>

                            <main className='flex flex-col gap-3'>

                                <Input
                                    className='bg-transparent border border-gray-500 outline-none '
                                    placeholder='Email'
                                    type='text'
                                    {...register('email', {
                                        required: true, validate: {
                                            matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                                "Email address must be a valid address",
                                        }
                                    })}

                                />

                                <Input
                                    className='bg-transparent border border-gray-500 outline-none '
                                    placeholder='Full Name'
                                    type='text'
                                    {...register('fullName', { required: true })}
                                />

                                <Input
                                    className='bg-transparent border border-gray-500 outline-none '
                                    placeholder='Password'
                                    type='password'
                                    {...register('password', { required: true })}
                                />
                            </main>

                            <Button
                                type='submit'
                                className='w-full my-3'
                                variant='default'
                            > {loading ? <Loader2 className='transition-all animate-spin' /> : 'Submit'}</Button>

                        </form>
                        <p className='font-medium py-2 text-center'>Already have an account?
                            <Link
                                className='text-blue-500 px-1 font-medium hover:underline'
                                href={'/log-in'}>Loing</Link>
                        </p>
                    </Card>
                </div>

            </div>
        </section>
    )
}

export default Page