import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import { Layout, Button } from 'antd';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Content from './components/content/Content';
import Home from './components/content/Home';
import Promotions from './components/content/Promotions';

export const App = () => {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Header>
            <Link to="/"><Button type="primary">Home</Button></Link>
            <Link to="/promotions"><Button>Promotions</Button></Link>
          </Header>
          <Content>
            <Route path="/" component={Home} />
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
