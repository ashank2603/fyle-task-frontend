import { useEffect, useState } from "react";
import Loader from "./Loader";
import { List, Card, Tag, Button, Statistic, Alert, Tooltip } from "antd";
import UserDetails from "./UserDetails";
import { NumberOutlined, ArrowRightOutlined } from "@ant-design/icons";

const User = ({ url }) => {
    const [data, setData] = useState(null);
    const [isUserLoading, setIsUserLoading] = useState(false);
    const [error, setError] = useState('');
 
    useEffect(() => {
        const fetchData = async () => {
            setIsUserLoading(true);
            try{
                const response = await fetch(url);
                if(response.status === 404) {
                    throw new Error(`Error! status: ${response.status}`);
                }
                const newData = await response.json();
                setData(newData);
            } catch(error) {
                setError(error.message)
            }
            setIsUserLoading(false)
        };
        fetchData();
    }, [url])

    return (
        <div>
            {isUserLoading && 
            <Loader />}
            {error === "Error! status: 404" && 
                <Alert
                    message="Error"
                    description="User not found. Try searching a different username"
                    type="error"
                />
            }
            {data !== null && 
            <div> 
                <UserDetails 
                    avatar_url = {data.userinfo.avatar_url}
                    name = {data.userinfo.name}
                    bio = {data.userinfo.bio}
                    location = {data.userinfo.location}
                    twitter_username = {data.userinfo.twitter_username}
                    github_username = {data.userinfo.username}
                />
                <br />
                <div style={{ textAlign: "center"}}>
                    <Statistic title="Total Number of Repositories" value={data.total} prefix={<NumberOutlined />} />
                </div>
                <br />
                <br />
                <List 
                   grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 4,
                    xl: 6,
                    xxl: 3,
                   }}
                   dataSource={data.userinfo.all_repos} 
                   renderItem={(item) => (
                    <List.Item key={item.id}>
                        <Card title={item.name} bordered={true} extra={
                            <Tooltip title="open repo">
                                <Button type="primary" shape="circle" href={item.repo_url} target="_blank" icon={<ArrowRightOutlined />}  key={item.id} />
                            </Tooltip>
                        }>
                        <p>{item.description}</p>
                        {item.languages.map((language) => (
                            <Tag color="#108ee9">{language}</Tag>
                        ))}
                        </Card>
                    </List.Item>
                   )}
                />
            </div>
            } 

        </div>
    )
}

export default User;