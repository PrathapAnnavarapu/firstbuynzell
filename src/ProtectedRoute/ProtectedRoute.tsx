import React from 'react'
import {Route , useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'


const ProtectedRoute = (props) =>{
    const navigate = useNavigate()
    const token = Cookies.get('jwt_token')

    if (token === undefined){
        return navigate('/')
    }
    return <Route {...props}/>

}

export default ProtectedRoute

