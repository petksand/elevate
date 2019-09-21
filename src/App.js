import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import { Layout } from 'antd';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Content from './components/content/Content';
import Home from './components/content/Home';
import BusinessPortal from "./components/content/BusinessPortal";


export const App = () => {
  return (
    <Router>
      <Layout>
        <Header>
          {/* Links can go in here */}
        </Header>
        <Content>
          {/* Routes/Pages can go in here */}
          <Route path="/" exact component={Home}/>
        </Content>
        <Footer>
          {/* Team Info and external links can go in here */}
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
