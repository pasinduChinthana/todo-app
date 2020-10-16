import React from 'react';
import './App.css';

import Home from './pages/Home'

import Layout from './Layout'
function App() {
  return (
    <div>
      <Layout>
          <Home />
      </Layout>
    </div>
  );
}

export default App;
