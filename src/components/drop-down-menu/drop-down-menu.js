import React from 'react';
import { Link } from "react-router-dom";

import { Menu } from 'antd';

export default function DropdownMenu({ routes, displayNames, signOut }) {
    const menuItems = routes.map(({ path }, key) => <Menu.Item key={key}><Link to={path}>{displayNames[key]}</Link></Menu.Item>);
    return (
        <Menu>
            {menuItems}
            <Menu.Item onClick={signOut}>Sign out</Menu.Item>
        </Menu>
    );
}