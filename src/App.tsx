import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { ProfilePic, Article, Feature, Navbar, Header } from "./components";
import './App.css';

function App() {

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
          <Route path='/' Component={HomePage}>
          </Route>
          <Route path='/home' Component={HomePage}>
          </Route>
          <Route path="blog">
            This is the blog page
          </Route>
          <Route path="contact">
            contact webpage
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function HomePage() {
  return (
    <React.Fragment>
      <Header/>
      <div className= "section__margin gradient__bg homepage__top">
        <ProfilePic/>
        <Article/>
      </div>
      <div className="section__padding section__margin">
        <Feature/>
      </div>
    </React.Fragment>
  )
}

export default App;