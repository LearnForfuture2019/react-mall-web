import React,{Component} from 'react'
import { Upload, Button,message} from 'antd';
import { UploadOutlined ,LoadingOutlined,PlusOutlined} from '@ant-design/icons';

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}

export default class ItemClassification extends Component{
    state = {
        loading: false,
        imageUrl:''

    };

    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                }),
            );
        }
    };
    handleCustomRequest = (file) =>{
        console.log(file)
    }
    render(){
        const { loading, imageUrl } = this.state;
        const uploadButton = (
            <div>
                {loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div style={{ marginTop: 8 }}>Upload</div>
            </div>
        );
        return (
            <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={beforeUpload}
                onChange={this.handleChange}
                customRequest={this.handleCustomRequest}
            >
                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
            </Upload>
        )
    }    
}