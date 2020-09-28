import React, {Component} from 'react'
import {
    Button,
    Card,
    Col,
    Form,
    Input,
    Row,
    Switch,
    Table,
    message} from 'antd'
import {
    getBrandList,
    findBrandById,
    deleteBrandById,
    findBrandByFuzzySearch
} from '../../../../requests'

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
    id: '编号',
    name: '品牌名称',
    firstLetter: '品牌首字母',
    sort: '排序',
    productCount: '商品',
    productCommentCount: '评论'
}
export default class ItemManagement extends Component {
    state = {
        data: [],
        columns: [],
    }


    createColumns = (columnKeys) => {
        const columns = columnKeys.map(item => {
            if (item === 'factoryStatus') {
                return {
                    title: '品牌制造商',
                    key: item,
                    render: (text, record) => {
                        return (
                            <Switch defaultChecked={text.factoryStatus === 1}
                                    onChange={this.handleSwitch}/>
                        )
                    },
                    align:'center'
                }
            } else if (item === 'showStatus') {
                return {
                    title: '是否显示',
                    key: item,
                    render: (text, record) => {
                        return (
                            <Switch defaultChecked={text.showStatus === 1}
                                    onChange={this.handleSwitch}/>
                        )
                    },
                    align:'center'
                }
            }
            return {
                title: titleMap[item],
                key: item,
                dataIndex: item,
                align:'center'
            }
        })
        columns.push({
            title: '操作',
            key: 'action',
            render: (text, record) => {
                return (
                    <Group>
                        <Button onClick={this.toEditBrand.bind(this,record)}>编辑</Button>
                        <Button danger onClick={this.deleteBrand.bind(this,record)}>删除</Button>
                    </Group>
                )
            },
            align:'center'
        })
        return columns
    }
    deleteBrand = (record) =>{
        deleteBrandById(record.id)
            .then(resp =>{
                if (resp.code === 200){
                    message.success(resp.message)
                }
            })
            .catch(err =>{
                message.warning(err.message)
            })
            .finally(()=>{
                //更新列表
                this.getBrandListData()
            })
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
                    const columnKeys = Object.keys(resp.data[0]).slice(0, 8)
                    const columns = this.createColumns(columnKeys)
                    //更新data数据
                    this.setState({
                        data,
                        columns
                    })
                }
            })
    }


    findBrand = (values) => {
        //获取数据将其展示出来
        findBrandByFuzzySearch(Object.values(values)[0])
            .then(resp =>{
                if (resp.code === 200) {
                    const data = resp.data
                    const columnKeys = Object.keys(resp.data[0]).slice(0, 8)
                    const columns = this.createColumns(columnKeys)
                    //更新data数据
                    this.setState({
                        data,
                        columns
                    })
                }else if (resp.code === 501){
                    const data = []
                    this.setState({
                        data
                    })
                }
            })

    };
    //添加品牌
    handleAddBrand = () => {
        window.localStorage.setItem('subTitle', '添加品牌')
        this.props.history.push('/admin/item/addBrand')

    }
    //编辑品牌
    toEditBrand = (record) =>{
        window.localStorage.setItem('subTitle', '编辑品牌')
        console.log(record)
        this.props.history.push({
            pathname:`/admin/item/editBrand${record.id}`
        })
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
                    onFinish={this.findBrand}
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
                        bordered
                    />
                </Card>
            </>
        )
    }
}