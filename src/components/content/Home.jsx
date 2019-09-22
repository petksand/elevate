import React from "react";
import { PageHeader, Carousel, Row, Col } from 'antd';
import { Button } from 'antd/lib/radio';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Row type="flex" justify="start">
        <PageHeader title="Uniward" footer="Loyalty as a service" />
      </Row>
      <Row type="flex" justify="center">
        <Col span={6} />
        <Col span={6}>
          <Row type="flex" justify="center">
            <Link to="/transactions"><Button>Get Started</Button></Link>
          </Row>
        </Col>
        <Col span={6} />
      </Row>
    </>
  );
};

export default Home;
