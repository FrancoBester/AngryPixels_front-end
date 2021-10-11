import React from 'react'
import { Route } from 'react-router-dom'
import auth from './auth'
import { Redirect } from 'react-router'
import './App.css';

export const ProtectedRoute = ({component:Component,...rest}) => {
    return (
        <Route {...rest} render={
            (props)=>{

                if(auth.isAuthenticated()){
                    return <Component {...props}/>
                }
                else{
                    return (<h1 className="warningHeading">CONTENT CLASSIFIED <br />Please Signin or Register</h1>)
                }
            }
        }/>
    )
}
