import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Repositories from './Repositories';

export default function routes() {
    return(
        <BrowserRouter>
            <switch>
                <Route path='./repositories' component={Repositories}/>
            </switch>
        </BrowserRouter>
        
    )
}