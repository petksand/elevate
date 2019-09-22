import React from 'react';
import { Layout, Row } from 'antd';
import { Route } from 'react-router-dom';
import Home from './Home';
import Promotions from './promotions/Promotions';
import BusinessPortal from './BusinessPortal';
import Transactions from './transactions/Transactions';

const { Content: AntContent } = Layout;

export const Content = () => {
    return (
        <AntContent style={{ overflowY: 'scroll' }}>
            <Row style={{ paddingLeft: '3em' }}>
                <Route path="/" exact component={Home} />
                <Route path="/promotions" exact component={Promotions} />
                <Route path="/businesses" exact component={BusinessPortal} />
                <Route path="/transactions" exact component={Transactions} />
            </Row>
        </AntContent>
    );
};

export default Content;
