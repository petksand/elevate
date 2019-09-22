import React from 'react';
import { Layout, Menu } from 'antd';
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
                {links.map((Link, i) => <Menu.Item key={`${Link.name}_${i}`}><Link /></Menu.Item>)}
            </Menu>
        </AntHeader>
    );
};

export default Header;
