import React from 'react'
import { Route } from 'react-router-dom'
import auth from './auth'
import { Redirect } from 'react-router'

export const ProtectedRoute = ({component:Component,...rest}) => {
    return (
        <Route {...rest} render={
            (props)=>{

                if(auth.isAuthenticated()){
                    return <Component {...props}/>
                }
                else{
                    return (<h1>You aren't allowed to see this</h1>)
                }
            }
        }/>
    )
}
