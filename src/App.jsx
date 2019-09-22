import React from "react";
import "./App.css";
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Content from './components/content/Content';

export const App = () => {
  return (
    <Router>
      <div className="App">
        <Layout style={{ height: '100vh' }}>
          <Header />
          <Content />
          <Footer />
        </Layout>
      </div>
    </Router>
  );
}

export default App;
