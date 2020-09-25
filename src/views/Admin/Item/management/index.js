import React, {Component} from 'react'
import {Button, Card, Col, Form, Input, Row, Switch, Table, Tag} from 'antd'
import {getBrandList} from '../../../../requests'

const layout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 16,
    },
};
const {Group} = Button

const titleMap = {
    id:'编号',
    name:'品牌名称',
    firstLetter:'品牌首字母',
    sort:'排序',
    productCount:'商品',
    productCommentCount:'评论'
}
export default class ItemManagement extends Component {
    state = {
        data: [],
        columns: [],
    }


    createColumns = (columnKeys) => {
        const columns = columnKeys.map(item => {
            if (item === 'factoryStatus'){
                return {
                    title:'品牌制造商',
                    key:item,
                    render:(text,record)=>{
                        return (
                            <Switch defaultChecked={text.factoryStatus === 1}
                                    onChange={this.handleSwitch}/>
                        )
                    }
                }
            }else if (item === 'showStatus'){
                return {
                    title:'是否显示',
                    key:item,
                    render:(text,record)=>{
                        return (
                            <Switch defaultChecked={text.showStatus === 1}
                                    onChange={this.handleSwitch}/>
                        )
                    }
                }
            }
            return {
                title: titleMap[item],
                key: item,
                dataIndex:item
            }
        })
        columns.push({
            title:'操作',
            key:'action',
            render:(text,record) =>{
                return (
                    <Group>
                        <Button>编辑</Button>
                        <Button danger>删除</Button>
                    </Group>
                )
            }
        })
        return columns
    }
    handleSwitch = (checked) => {
        console.log(`switch to ${checked}`);
    }

    componentDidMount() {
        this.getBrandListData()
    }

    getBrandListData = () => {
        getBrandList()
            .then(resp => {
                if (resp.code === 200) {
                    const data = resp.data
                    console.log(data)
                    const columnKeys = Object.keys(resp.data[0]).slice(0,8)
                    const columns = this.createColumns(columnKeys)
                    //更新data数据
                    this.setState({
                        data,
                        columns
                    })
                }
            })
    }


    onFinish = (values) => {
        console.log('Success:', values);
    };
    //添加品牌
    handleAddBrand = () =>{
        this.props.history.push('/admin/item/addbrand')
    }
    render() {

        return (
            <>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={this.onFinish}
                    style={{border: '1px solid #dedede', padding: 10, backgroundColor: 'white'}}
                >
                    <Row justify='space-between'>
                        <Col>
                            <h3>筛选搜索</h3>
                        </Col>
                        <Col>
                            <Button type='primary'
                                    htmlType="submit"
                            >
                                查询结果
                            </Button>
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
                      extra={<Button onClick={this.handleAddBrand}>添加</Button>}
                      style={{width: '100%', marginTop: 10}}>
                    <Table
                        columns={this.state.columns}
                        dataSource={this.state.data}
                        pagination={{
                            showSizeChanger: true,
                            showQuickJumper: true
                        }}
                    />
                </Card>
            </>
        )
    }
}