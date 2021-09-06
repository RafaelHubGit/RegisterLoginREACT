import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from "react-router-dom";


import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { AuthRouter } from './AuthRouter';

import { JournalScreen } from '../components/journal/JournalScreen';
import { login } from '../actions/auth';

export const AppRouter = () => {

    const auth = getAuth();
    const dispatch = useDispatch();

    const [ checking, setCheching ] = useState( true );
    const [ isLoggedIn, setIsLoggedIn ] = useState( false )

    useEffect(() => {
        onAuthStateChanged( auth, (user) => {
            
            if ( user?.uid ){
                dispatch( login( user.uid, user.displayName ) );
                setIsLoggedIn( true );
            } else {
                setIsLoggedIn( false );
            }

            setCheching( false );

        })
    }, [ dispatch, setCheching, isLoggedIn ]);

    if ( checking ){
        return (
            <h1> Espere...</h1>
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        path="/auth"
                        component={ AuthRouter }
                        isAuthenticated = { isLoggedIn }
                    />
                    <PrivateRoute 
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/"
                        component={ JournalScreen }
                    />

                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    )
}
