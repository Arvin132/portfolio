import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { Homepage } from './containers';
import './App.css';

function App(props: any) {

    const firebaseConfig = {
        apiKey: "AIzaSyCd5bGsyxu7O6P4Ozvg6NCN-5TiCCzMi6g",
        authDomain: "arvin-profolio.firebaseapp.com",
        projectId: "arvin-profolio",
        storageBucket: "arvin-profolio.appspot.com",
        messagingSenderId: "1058179649227",
        appId: "1:1058179649227:web:0a3c622aa579a7ffa3554e",
        measurementId: "G-MBTB40WWD9"
    };
    const app = initializeApp(firebaseConfig);

    return (
        <div>
            <BrowserRouter>
                
                <Routes>
                    <Route path='/' Component={Homepage}>
                    </Route>
                    <Route path='/home' Component={Homepage}>
                    </Route>
                    <Route path="/blogs">
                        This is the blog page
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