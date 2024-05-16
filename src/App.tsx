import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Homepage, Blogpage, BlogList, Projectpage } from './containers';

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
                    <Route path="/blogs" Component={BlogList}> 
                    </Route>
                    <Route path="/blogs/:id" Component={Blogpage}> 
                    </Route>
                    <Route path="/projects" Component={Projectpage}>
                    </Route>
                </Routes>
            
            </BrowserRouter>
        </div>
    );
}
export default App;