import React from 'react';
import { Layout, Menu, Button } from 'antd';
import { links } from './links';

const { Header: AntHeader } = Layout;


export const Header = () => {
    return (
        <AntHeader>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
                >
                <Menu.Item><div className="logo" /></Menu.Item>
                {links.map(Link => <Menu.Item><Link /></Menu.Item>)}
            </Menu>
        </AntHeader>
    );
};

export default Header;
