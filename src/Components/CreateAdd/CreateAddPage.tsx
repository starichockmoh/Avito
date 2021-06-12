import React from "react";
import {Button, Form, Input, Select, Upload} from "antd";
import styles from "./CreateAddPage.module.css"
import TextArea from "antd/es/input/TextArea";
import {PlusOutlined} from "@ant-design/icons";

const {Option} = Select;


class CreateAddPageContainer extends React.Component<any, any> {
    render() {
        const onFinish = (values: any) => {
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
                        <Option value="Cars">Cars</Option>
                        <Option value="Appliances">Appliances</Option>
                        <Option value="Real estate">Real estate</Option>
                        <Option value="Your things">Your things</Option>
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
}


export default CreateAddPageContainer