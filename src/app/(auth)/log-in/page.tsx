'use client'

import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { toast } from 'react-toastify'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { Loader2 } from 'lucide-react'

import { useDispatch } from 'react-redux'
import { loadCredentials, setCredentials } from '@/store/authSlice'
import { useRouter } from 'next/navigation'



const Page = () => {

    const [loading, setLoading] = useState(false)
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch()
    const router = useRouter()


    const handleLogin = async (payload) => {
        setLoading(true)
        try {
            const response = await axios.post(`http://localhost:3000/api/log-in`,
                {
                    email: payload.email,
                    password: payload.password
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );

            if (!response) console.log('something went wrong while login')


            // dispatch the credentials to redux store 
            dispatch(setCredentials(response.data))


            console.log(response.data)
            toast(response.data.message)


            // redirect user to dashboard 
            router.push('/panel')

            setLoading(false)
        } catch (error) {
            console.log('Client ERR: User Reg.: ', error)
            toast('Something went wrong..!')
        }
        setLoading(false)
    }

    useEffect(() => {

    }, [dispatch, router])

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
                            <CardTitle className='font-extrabold text-2xl'>Log In</CardTitle>

                        </CardHeader>

                        <form onSubmit={handleSubmit(handleLogin)}>

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
                        <p className='font-medium py-2 text-center'>Don't have an account?
                            <Link
                                className='text-blue-500 px-1 font-medium hover:underline'
                                href={'/sign-up'}>Sign up</Link>
                        </p>
                    </Card>
                </div>

            </div>
        </section>
    )
}

export default Page