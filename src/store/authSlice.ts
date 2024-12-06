import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: '',
    isAuthenticated: false,
    user: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            const { user, accessToken } = action.payload;

            state.user = user;
            state.token = accessToken;
            state.isAuthenticated = true;

            // store the user and token in browser local storeage 
            localStorage.setItem('accessToken', accessToken)
            localStorage.setItem('user', JSON.stringify(user))
        },
        loadCredentials: (state) => {
            // FEATURE: GPT Ref: load all the value after page mount in client side.
            if (typeof window !== 'undefined') {
                const token = localStorage.getItem('accessToken');
                const user = JSON.parse(localStorage.getItem('user')!);

                if (token) {
                    state.token = token
                    state.isAuthenticated = true;
                    state.user = user;
                }
            }
        },
        logout: (state, action) => {
            state.user = null;
            state.token = '';
            state.isAuthenticated = false;

            // remove the user and token from browser local storage 
            localStorage.removeItem('accessToken')
            localStorage.removeItem('user')
        }

    }
})

export const { setCredentials, logout, loadCredentials } = authSlice.actions;
export default authSlice.reducer;