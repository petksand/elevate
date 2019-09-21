import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import { Layout } from 'antd';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Content from './components/content/Content';
import Home from './components/content/Home';
import Promotions from './components/content/Promotions';

export const App = () => {
  return (
    <Router>
      <div>

      <Layout>
        <Header>
          {/* Links can go in here */}
          <Link to="/">Home</Link>
          <Link to="/promotions">Promotions</Link>
        </Header>
        <Content>
          {/* Routes/Pages can go in here */}
          <Route path="/" exact component={Home} />
          <Route path="/promotions" exact component={Promotions} />
        </Content>
        <Footer>
          {/* Team Info and external links can go in here */}
        </Footer>
      </Layout>
      </div>
    </Router>
  );
}

export default App;
