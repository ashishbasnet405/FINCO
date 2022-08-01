import React,{useState, useEffect} from 'react'
import { Outlet, Navigate } from 'react-router-dom';

const Protected = () => {
    const [auth] = useState(localStorage.getItem("fincoLoginDetails"));
    if(auth===null || auth === ''){
        return <Navigate to='/' />
    }
    else{
        return <Outlet />
    }
}

export default Protected