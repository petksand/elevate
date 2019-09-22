import React from 'react';
import { Layout } from 'antd';

const { Footer: AntFooter } = Layout;

export const Footer = () => {
    return (
        <AntFooter style={{ textAlign: 'center' }}>
            Aloha
        </AntFooter>
    );
};

export default Footer;
