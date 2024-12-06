import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import bcrypt from 'bcrypt'
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest, res: NextResponse) {
    await dbConnect();

    try {
        const { email, password, fullName } = await req.json()

        // find existing user in db 
        const existingUser = await User.findOne({ email })
        if (existingUser) return Response.json({ status: 403, message: 'user already exist' })


        // password hashing with bcrypt
        const hashedPassword = await bcrypt.hash(password, 10)
        const expiryDate = new Date()
        expiryDate.setHours(expiryDate.getHours() + 1)

        
        const newUser = new User({
            email,
            fullName,
            password: hashedPassword
        })

        await newUser.save();

        return NextResponse.json({
            status: 201,
            success: true,
            newUser,
            message: 'User registerd successfully'
        })
    } catch (error: any) {
        console.log('Error in user reg.: ', error)
        return NextResponse.json({
            status: 500,
            success: false,
            message: error.message
        })
    }

}