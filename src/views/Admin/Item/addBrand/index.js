import React, {Component} from 'react'
import {Form, Input, Button,Upload,Switch} from 'antd';

const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 4,
        span: 16,
    },
};
export default class AddBrand extends Component {

    formRef = React.createRef();
    onFinish = (values) => {
        console.log(values);
    };
    onReset = () => {
        this.formRef.current.resetFields();
    };
    handleSwitchClick =(item,checked)=>{
        const num = checked?1:0
        console.log(item)
        this.formRef.current.setFieldsValue({
            [item]:num
        })

    }

    render() {
        return (
            <Form
                {...layout}
                ref={this.formRef}
                name="control-ref"
                onFinish={this.onFinish}
            >
                <Form.Item
                    name="name"
                    label="品牌名称"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    name="firstLetter"
                    label="品牌首字母"

                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    name="logo"
                    label="品牌LOGO"
                    rules={[
                        {
                            required:true,
                        }
                    ]}
                >
                   <Upload>
                       <Button type='primary'>点击上传</Button>
                       <p style={{color:'#cecece'}}>只能上传png/jpg文件，且不超过10M</p>
                   </Upload>
                </Form.Item>
                <Form.Item
                    name="bigPic"
                    label="品牌专区大图"
                >
                    <Upload >
                        <Button type='primary'>点击上传</Button>
                        <p style={{color:'#cecece'}}>只能上传png/jpg文件，且不超过10M</p>
                    </Upload>
                </Form.Item>
                <Form.Item
                    name="brandStory"
                    label="品牌故事"

                >
                    <Input.TextArea rows={1}/>
                </Form.Item>

                <Form.Item
                    name="sort"
                    label="排序"
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    name="showStatus"
                    label="是否显示:"

                >
                    <Switch defaultChecked onChange={this.handleSwitchClick.bind(this,'showStatus')}/>
                </Form.Item>
                <Form.Item
                    name="factoryStatus"
                    label="品牌制造商: "

                >
                    <Switch defaultChecked onChange={this.handleSwitchClick.bind(this,'factoryStatus')}/>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button htmlType="button" onClick={this.onReset}>
                        Reset
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}