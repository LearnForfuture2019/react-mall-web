import React from 'react';

import {Form, Input, Button,  Row, Col,Select,TreeSelect} from 'antd';
const {Group} = Button
const {Option} = Select

const layout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 16,
    },
};
const treeData = [
    {
        title: 'Node1',
        value: '0-0',
        children: [
            {
                title: 'Child Node1',
                value: '0-0-1',
            },
            {
                title: 'Child Node2',
                value: '0-0-2',
            },
        ],
    },
    {
        title: 'Node2',
        value: '0-1',
    },
];
export default class Item extends React.Component {
    formRef = React.createRef()
    onFinish = (values) => {
        console.log('Success:', values);
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    handleChange = (value) => {
        this.formRef.current.setFieldsValue(value)
    }
    render() {
        return (
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                ref={this.formRef}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
                style={{border:'1px solid #dedede',padding:10}}
            >
                <Row justify='space-between'>
                    <Col>
                        <h3>筛选搜索</h3>
                    </Col>
                    <Col>
                       <Group>
                           <Button onClick={()=>this.formRef.current.resetFields()}>重置</Button>
                           <Button type='primary' htmlType="submit">查询结果</Button>
                       </Group>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        <Form.Item
                            label="输入搜索:"
                            name="inputSearch"

                        >
                            <Input placeholder='商品名称'/>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            label="商品货号:"
                            name="productNumbers"


                        >
                            <Input  placeholder="商品货号"/>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            label="商品分类:"
                            name="productClassification"

                        >
                            <TreeSelect
                                style={{ width: '100%' }}
                                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                treeData={treeData}
                                placeholder="Please select"
                                treeDefaultExpandAll
                                onChange={this.onChange}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        <Form.Item
                            label="商品品牌:"
                            name="productBrand"
                        >
                            <Select
                                placeholder="请选择品牌"
                                style={{ width: 120 }}
                                onChange={this.handleChange}
                            >
                                <Option value="小米">小米</Option>
                                <Option value="七匹狼">七匹狼</Option>
                                <Option value="海澜之家">海澜之家</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            label="上架状态:"
                            name="saleState"
                        >
                            <Select
                                placeholder="全部"
                                style={{ width: 120 }}
                                onChange={this.handleChange}
                            >
                                <Option value="上架">上架</Option>
                                <Option value="下架">下架</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            label="审核状态:"
                            name="auditState"
                        >
                            <Select
                                placeholder="全部"
                                style={{ width: 120 }}
                                onChange={this.handleChange}
                            >
                                <Option value="审核通过">审核通过</Option>
                                <Option value="未通过">未通过</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        )
    }
}