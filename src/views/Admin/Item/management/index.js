import React, {Component} from 'react'
import {Button, Card, Col, Form, Input, Row, Table} from 'antd'

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
];

const data = [];

const layout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 16,
    },
};
const {Group} = Button
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    });
}
export default class ItemManagement extends Component {
    state = {
        selectedRowKeys: [],
    }
    formRef = React.createRef()
    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({selectedRowKeys});
    };

    onFinish = (values) => {
        console.log('Success:', values);
    };

    render() {
        const {selectedRowKeys} = this.state
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        return (
            <>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    ref={this.formRef}
                    onFinish={this.onFinish}
                    style={{border: '1px solid #dedede', padding: 10,backgroundColor:'white'}}
                >
                    <Row justify='space-between'>
                        <Col>
                            <h3>筛选搜索</h3>
                        </Col>
                        <Col>
                            <Group>
                                <Button onClick={() => this.formRef.current.resetFields()}>重置</Button>
                                <Button type='primary' htmlType="submit">查询结果</Button>
                            </Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={8} xs={16}>
                            <Form.Item
                                label="输入搜索:"
                                name="inputSearch"

                            >
                                <Input placeholder='品牌名称/关键字'/>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
                <Card title="数据列表"
                      extra={<Button>添加</Button>}
                      style={{width: '100%',marginTop:10}}>
                    <Table
                        rowSelection={rowSelection}
                        columns={columns}
                        dataSource={data}/>
                </Card>
            </>
        )
    }
}