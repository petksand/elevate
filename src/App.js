import React from "react";
import "./App.css";
import { Route, Router, Link } from 'react-router-dom';
import { Layout } from 'antd';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Content from './components/content/Content';


export const App = () => {
  return (
    <Router>
      <Layout>
        <Header>
          {/* Links can go in here */}
        </Header>
        <Content>
          {/* Pages can go in here */}
        </Content>
        <Footer>
          {/* Team Info and external links can go in here */}
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
