import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import bcrypt from 'bcrypt'
import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'


export async function POST(req: NextRequest, res: NextResponse) {

    const cookie = await cookies()

    await dbConnect()

    try {
        const { email, password } = await req.json();

        if (!(email || password)) return NextResponse.json({ status: 400, message: 'email and password is required' })

        // check for existing user
        const existingUser = await User.findOne({ email })

        if (!existingUser) return NextResponse.json({
            status: 400,
            message: 'User does not exist'
        })


        const isPasswordValid = await bcrypt.compare(password, existingUser.password)
        if (!isPasswordValid) return NextResponse.json({ status: 400, message: 'Invalid credentials' })

        //generate accessToken using jwt
        const token = jwt.sign(
            { existingUser },
            process.env.ACCESS_TOKEN_SECRET!,
            { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
        )

        const loggedInUser = await User.findById(existingUser._id).select('-password')



        //set cookie 
        
        
        return NextResponse.json({
            status: 200,
            user: loggedInUser,
            accessToken: token,
            message: 'user logged in successfully'

        })

    } catch (error: any) {
        console.log('Error in login user: ', error)
        return NextResponse.json({
            status: 500,
            message: error.message,
        })
    }
}