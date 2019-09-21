import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import { Layout, Button } from 'antd';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Content from './components/content/Content';

export const App = () => {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Header />
          <Content />
          <Footer />
        </Layout>
      </div>
    </Router>
  );
}

export default App;
