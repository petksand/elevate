import React from 'react';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
const { Header: AntHeader } = Layout;

export const Header = () => {
    return (
        <AntHeader>
            <Link to="/"><Button type="primary">Home</Button></Link>
            <Link to="/promotions"><Button>Promotions</Button></Link>
            <Link to="/businesses"><Button>Business</Button></Link>
        </AntHeader>
    );
};

export default Header;
