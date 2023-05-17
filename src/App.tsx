import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Homepage, Blogpage } from './containers';

import './App.css';

function App(props: any) {

    return (
        <div>
            <BrowserRouter>
                
                <Routes>
                    <Route path='/' Component={Homepage}>
                    </Route>
                    <Route path='/home' Component={Homepage}>
                    </Route>
                    <Route path="/blogs"> 
                         this is the blogs search page 
                    </Route>
                    <Route path="/blogs/:id" Component={Blogpage}> 
                    </Route>
                    <Route path="/cl">
                        Cover Letter
                    </Route>
                </Routes>
            
            </BrowserRouter>
        </div>
    );
}
export default App;