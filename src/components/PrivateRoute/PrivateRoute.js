'use client';

import { useSelector } from 'react-redux';
// import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';



const PrivateRoute = (WrappedComponent) => {

    const AuthWrapper = (props) => {
        // const router = useRouter();
        const { isAuthenticated } = useSelector(state => state.auth);
        const [isClient, setIsClient] = useState(false);


        useEffect(() => {
            setIsClient(true); // Marks the component as mounted on the client
        }, []);

        useEffect(() => {
            if (isClient && !isAuthenticated) return
        }, [isAuthenticated, isClient])

        if (!isClient || !isAuthenticated) {
            return;
        }

        return <WrappedComponent {...props} />
    }
    return AuthWrapper;
}

export default PrivateRoute