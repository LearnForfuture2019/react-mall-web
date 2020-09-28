import React,{Component} from 'react'
import {Button, Card, Table} from "antd";

export default class Classification extends Component{
    state = {
        columns:[],
        data:[]
    }
    render(){

        return (
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
        )
    }    
}