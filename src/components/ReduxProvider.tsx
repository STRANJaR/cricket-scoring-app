'use client';

import store from "@/store/store";
import { useEffect } from "react";
import { Provider } from "react-redux";

export default function ReduxProvider({ children }) {


    return <Provider store={store}>{children}</Provider>;
}