import { propsToClassKey } from '@mui/styles'
import React from 'react'
import { Navigate, Route } from 'react-router-dom'
import {useAuthContext} from "../context/AuthContextProvider"

const PrivateRouter = (props) => {
    console.log(props);
    const {currentUser}= useAuthContext()
    return (
    currentUser ? (<Route path ={props.path} element={props.element}/>) :(<Navigate to="/login"/>))
}

export default PrivateRouter;
