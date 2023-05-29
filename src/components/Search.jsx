import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';

const Search = ({ onSearch }) => {
    const [searchValue, setSearchValue] = useState('');
    const [updated, setUpdated] = useState('');

    const handleInput = (event) => {
        setSearchValue(event.target.value)
        setUpdated(event.target.value);
    };

    const handleEnter = (event) => {
        if (event.key === 'Enter') {
            onSearch(updated);
        }
    };

    const handleSearch = () => {
        onSearch(searchValue);
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '20px',
            marginBottom: '20px',
        }}>
        <Space direction="horizontal" size={5}>
            <Input
                type="text"
                value={searchValue}
                allowClear={true}
                onChange={handleInput}
                onPressEnter={handleEnter}
                placeholder="Movie name"
                style={{
                    width: 200,
                }}
                />
            <Button
                icon={<SearchOutlined />}
                onClick={handleSearch}>
                Search
            </Button>
        </Space>
        </div>
    );
};

export default Search;