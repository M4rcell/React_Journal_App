
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import {firebase} from '../firebase/firebase-config';
import { login } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { startLoadingNotes } from '../actions/notes';
export const AppRouter = () => {

    const dispatch = useDispatch();
    
    const [checking, setchecking] = useState(true);
    
    const [isLoggEdIn, setisLoggEdIn] = useState(false)

    useEffect(() => {

        //obervable
        firebase.auth().onAuthStateChanged( async(user)=>{

         if (user?.uid) { //si existe uid
             dispatch(login(user.uid,user.displayName))
             setisLoggEdIn(true)
              
             //Cargar Notas
             
           dispatch(startLoadingNotes(user.uid));

         }
         else{
            setisLoggEdIn(false)

         }

         setchecking(false)

 
        })
    }, [dispatch,setchecking,setisLoggEdIn])

    if (checking) {
        return(
            <h1> Wait... </h1>
        )
        
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                      path="/auth"
                      component={AuthRouter}
                      isAuthenticated={isLoggEdIn}
                    />

                    <PrivateRoute
                       exact
                       path="/"
                       component={JournalScreen}
                       isAuthenticated={isLoggEdIn}
                    />  

                    <Redirect to="/auth/login"/>
     
                </Switch>
            </div>            
        </Router>
    )
}
