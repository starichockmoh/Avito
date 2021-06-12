import React, {useState} from "react";
import {Upload} from "antd";
import {LoadingOutlined, PlusOutlined} from "@ant-design/icons";

const PhotosInput: React.FC<any> = (props) => {
    let [isFileLoading, setFileLoadingState] = useState(false)
    const PhotosProps = {
        onChange(info:any){
            if (info.file.status === 'uploading'){
                setFileLoadingState(true)
            }
        },
        showUploadList: false,
        customRequest(info: any) {
            console.log(info)
            setTimeout(() => {setFileLoadingState(false)},2000)
        },
    };

    return <div>
        <Upload {...PhotosProps} name="avatar" listType="picture-card">
            <UploadButton isFileLoading = {isFileLoading}/>
        </Upload>
    </div>
}

const UploadButton: React.FC<{isFileLoading: boolean}> = ({isFileLoading}) => {
    return <div>
        {isFileLoading? <LoadingOutlined/>:<PlusOutlined/>}
        <div>Upload photo</div>
    </div>
}

export default PhotosInput