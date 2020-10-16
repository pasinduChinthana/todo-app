import React from 'react';
import './App.css';
import UserHome from "./pages/UserHome";

import Layout from './Layout'
function App() {
  return (
    <div>
      <Layout>
        <UserHome/>
      </Layout>
    </div>
  );
}

export default App;
