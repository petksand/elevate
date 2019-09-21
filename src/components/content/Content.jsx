import React from 'react';
import { Layout } from 'antd';
import { Route } from 'react-router-dom';
import Home from './Home';
import Promotions from './Promotions';
import BusinessPortal from './BusinessPortal';

const { Content: AntContent } = Layout;

export const Content = () => {
    return (
        <AntContent>
            <Route path="/" component={Home} />
            <Route path="/promotions" exact component={Promotions} />
            <Route path="/businesses" exact component={BusinessPortal} />
        </AntContent>
    );
};

export default Content;
