import { useState } from "react";
import User from './User.js';
import { Input, Tooltip, Button, Col, Row } from 'antd';
import { SearchOutlined, ReloadOutlined } from '@ant-design/icons';

const Search = () => {
    const [username, setUsername] = useState("");
    const [url, setUrl] = useState(null);

    const handleClick = () => {
        username !== '' && setUrl(`http://127.0.0.1:5000/api/${username}`);
        setUsername("");
    }

    return (
        <div>
            <Row>
                <Col span={18} push={16}>
                    <Tooltip title="search">
                        <Button type="primary" shape="circle" onClick={handleClick} icon={<SearchOutlined />} />
                    </Tooltip>
                    <Tooltip title="refresh search">
                        <Button type="primary" shape="circle" onClick={() => window.location.reload(false)} icon={<ReloadOutlined />} />
                    </Tooltip>
                </Col>
                <Col span={6} pull={9}>
                    <Input
                        id="username"
                        name="username"
                        onChange={(event) => setUsername(event.target.value)}
                        placeholder="Enter GitHub Username" 
                        value={username}
                        size="medium"
                    />
                </Col>
            </Row>
            <User url={url} />
            <br />
        </div>
    )
}

export default Search;