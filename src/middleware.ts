import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken'


export async function middleware(req: NextRequest) {
    const token  = req.headers.get('authorization') || req.cookies.get('token');

    if(!token){
        return NextResponse.redirect(new URL('/log-in', req.url))

    }

    try {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        return NextResponse.next();
    } catch (error) {
        console.log('JWT ERROR: ', error)
        return NextResponse.redirect(new URL('/log-in', req.url));
    }
}

export const config = {
    matcher: []
}