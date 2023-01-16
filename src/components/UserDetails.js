import { Col, Row, Descriptions, Avatar } from "antd";
import { TwitterOutlined, GithubOutlined } from "@ant-design/icons";

const UserDetails = ({ avatar_url, name, bio, location, twitter_username, github_username }) => {
    return (
        <div>
            <Row>
                <Col span={18} push={5}>
                    <Descriptions title={name} bordered>
                        <Descriptions.Item label="UserName">{github_username}</Descriptions.Item>
                        <Descriptions.Item label="GitHub">{github_username}<a href={`https://github.com/${github_username}`}><GithubOutlined /></a></Descriptions.Item>
                        <Descriptions.Item label="Location">{location}</Descriptions.Item>
                        <Descriptions.Item label="Twitter">{twitter_username}<a href={`https://twitter.com/${twitter_username}`} target="_blank">{twitter_username !== "" && <TwitterOutlined />}</a></Descriptions.Item>
                        <Descriptions.Item label="Bio">{bio}</Descriptions.Item>
                    </Descriptions>
                </Col>
                <Col span={6} pull={16}>
                    <Avatar
                        size={{
                        xs: 24,
                        sm: 32,
                        md: 40,
                        lg: 84,
                        xl: 90,
                        xxl: 210,
                        }}
                        src={avatar_url}
                    />
                </Col>
            </Row>

        </div>
    )
}

export default UserDetails;