import React from "react";
import {Button, Form, Input, Select, Upload} from "antd";
import styles from "./CreateAddPage.module.css"
import TextArea from "antd/es/input/TextArea";
import {PlusOutlined} from "@ant-design/icons";
import {useDispatch} from "react-redux";
import {postNewAd} from "../../Redux/Reducers/AdsReducer";

const {Option} = Select;

type ValuesType = {
    adName: string,
    adCategory: string,
    adPrice: string,
    adPhoto: any
}

const CreateAddPageContainer = () =>  {
    const dispatch = useDispatch()
    const onFinish = (values: ValuesType) => {
        dispatch(postNewAd(values.adName, Number(values.adCategory),
            Number(values.adPrice), values.adPhoto && values.adPhoto.fileList[0].originFileObj))
        console.log(values)
    };
    return <div>
        <h1> Create Add </h1>
        <Form
            name="basic"
            onFinish={onFinish}
            className={styles.InfoForms}
        >
            <Form.Item name="adName" rules={[{required: true}]}>
                <Input placeholder={"Enter name"}/>
            </Form.Item>
            <Form.Item name="adCategory" rules={[{required: true}]}>
                <Select placeholder="Select a category">
                    <Option value= "2">Cars</Option>
                    <Option value="3">Appliances</Option>
                    <Option value="4">Real estate</Option>
                    <Option value="5">Your things</Option>
                </Select>
            </Form.Item>
            <Form.Item name="adPrice">
                <Input placeholder={"Enter Price of ad"}/>
            </Form.Item>
            <Form.Item name="adDescription">
                <TextArea rows={4} placeholder={"Add Description"}/>
            </Form.Item>
            <Form.Item name="adPhoto">
                <Upload name="photo" listType="picture-card">
                    <PlusOutlined/>
                    <div>Upload photo</div>
                </Upload>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Create
                </Button>
            </Form.Item>
        </Form>

    </div>
}


export default CreateAddPageContainer