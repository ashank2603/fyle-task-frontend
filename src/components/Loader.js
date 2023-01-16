import { Spin, Col, Row } from 'antd';

const Loader = () => {
    return (
        <div>
            <Row>
                <Col span={18} push={12}>
                    <br />
                    <Spin tip="Loading" size='large' />
                </Col>
            </Row>
        </div>
    )
}

export default Loader;