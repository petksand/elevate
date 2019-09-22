import React from "react";
import "./App.css";
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Content from './components/content/Content';
import { AppContext, defaultContext } from './App.context';

export const App = () => {
  return (
    <AppContext.Provider value={defaultContext}>
      <Router>
        <div className="App">
          <Layout style={{ height: '100vh' }}>
            <Header />
            <Content />
            <Footer />
          </Layout>
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
