
import React from 'react';
import './App.css';
import UserHome from "./pages/UserHome";
import  Home from "./pages/Home"
import RegisterForm from "./pages/register/RegisterForm";

import Layout from './Layout'
function App() {
  return (
    <div>
      <Layout>
      <RegisterForm/>
       <UserHome/>
      </Layout>
    </div>
  );
}

export default App;

