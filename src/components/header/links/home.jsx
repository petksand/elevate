import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from 'antd';

export const HomeLink = () => <Link to="/"><Avatar shape="square" className="logo" alt={"Uniward Logo"} src={"/branding/uniward.png"} /></Link>;
