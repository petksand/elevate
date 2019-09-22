import React from 'react';
import { Layout } from 'antd';

const { Footer: AntFooter } = Layout;

export const Footer = () => {
    return (
        <AntFooter style={{ textAlign: 'center', height: '2.5em' }}>
            Aloha
        </AntFooter>
    );
};

export default Footer;
