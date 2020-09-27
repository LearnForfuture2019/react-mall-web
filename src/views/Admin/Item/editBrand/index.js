import React, {Component} from 'react'
import {
    Form,
    Input,
    Button,
    Upload,
    Radio
} from 'antd';
import axios from 'axios'
import {findeBrandById} from '../../../../requests'

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
export default class EditBrand extends Component {
    state = {
        bigPic: '',
        brandStory: '',
        firstLetter: '',
        logo: '',
        name: '',
        sort: '',
        factoryStatus: '',
        showStatus: '',
        productCount: '',
        productCommentCount: '',
        id:''
    }
    formRef = React.createRef();

    onFinish = (values) => {

    };
    onReset = () => {
        this.formRef.current.resetFields();
    };

    componentDidMount() {
        const id = this.props.match.params.id
        findeBrandById(id)
            .then(resp => {
                console.log(resp)
                if (resp.code === 200) {
                    //更新状态
                    const data = resp.data

                    console.log(this.formRef.current.getFieldsValue());
                    console.log(this.formRef.current.setFieldsValue(data));
                    console.log(this.formRef.current.getFieldsValue());
                }
            })
    }

    //上传图片
    handleUpload = (type, {file}) => {
        /*利用贴图库来上传url地址*/
        //创建Form表单
        let form = new FormData()
        //添加token
        form.append('Token', '8e289ea49bf85cbe6e7e877aef2' +
            '6786a69c48c73:avfGBksVg5hRMRSl-iMKKMZFXE8=:eyJ' +
            'kZWFkbGluZSI6MTYwMTE3MDQ3NSwiYWN0aW9uIjoiZ2V0IiwidW' +
            'lkIjoiNzI2NTA5IiwiYWlkI' +
            'joiMTcyMDUyNiIsImZyb20iOiJmaWxlIn0=')
        //添加file字段
        form.append('file', file)
        //发送ajax请求
        axios.post('http://up.imgapi.com/', form)
            .then(resp => {
                if (resp.status === 200) {
                    //成功，保存url地址
                    const imgUrl = resp.data.linkurl
                    //更新表单数据
                    this.formRef.current.setFieldsValue({
                        [type]: imgUrl
                    })

                }
            })
            .catch(err => {
                console.log('请再次上传图片')
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
                            required: true,
                        }
                    ]}
                >
                    <Upload
                        customRequest={this.handleUpload.bind(this, 'logo')}
                    >
                        <Button type='primary'>点击上传</Button>
                        <p style={{color: '#cecece'}}>只能上传png/jpg文件，且不超过10M</p>
                        
                    </Upload>
                </Form.Item>
                <Form.Item
                    name="bigPic"
                    label="品牌专区大图"

                >
                    <Upload
                        customRequest={this.handleUpload.bind(this, 'bigPic')}
                    >
                        <Button type='primary'>点击上传</Button>
                        <p style={{color: '#cecece'}}>只能上传png/jpg文件，且不超过10M</p>
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
                    <Radio.Group>
                        <Radio value={1}>是</Radio>
                        <Radio value={0}>否</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item
                    name="factoryStatus"
                    label="品牌制造商: "

                >
                    <Radio.Group>
                        <Radio value={1}>是</Radio>
                        <Radio value={0}>否</Radio>
                    </Radio.Group>
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