import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

export default function SearchInput(props) {
    return (
        <Search placeholder="please input book name"
            onSearch={props.onSearch}
            enterButton />
    );
}