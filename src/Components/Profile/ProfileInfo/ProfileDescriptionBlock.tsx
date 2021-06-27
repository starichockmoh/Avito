import React, {useState} from "react";
import 'antd/dist/antd.css';
import styles from "./ProfileDescriptionBlock.module.css"
import 'antd/dist/antd.css';
import {Space, Card, Button, Input, Form} from 'antd';
import {useDispatch} from "react-redux";
import {changeProfile} from "../../../Redux/Reducers/ProfileReducer";

type PropsType = {
    Name: string
    UserId: number
    Email: string
}

const ProfileDescriptionBlock: React.FC<PropsType> = ({Name, UserId, Email}) => {
    const [EditMode, SetEditMode] = useState(false)
    const dispatch = useDispatch()
    const onFinish = (values: {new_profile_name: string}) => {
        let newName = values.new_profile_name
        dispatch(changeProfile(newName, UserId))
    }
    return <div >
        <Space direction="vertical">
            <Card title={Name} style={{width: 300}}>
                <div className={styles.Desc}>
                    <p><span>Full Name:</span> {Name} </p>
                    <p><span>Email:</span> {Email} </p>
                    <p><span>CompleteDeals:</span> 45 </p>
                    <p><span>On Huito with:</span> 12.05.2018 </p>
                </div>
                <Button onClick={() => SetEditMode(true)} type={"link"}> Change profile </Button>
                {EditMode && <>
                    <Form name = 'change_profile' onFinish={onFinish}>
                        <Form.Item
                            name={'new_profile_name'}
                            label={'Your new name:'}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input correct username!',
                                    max: 20
                                }]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item>
                            <Button htmlType={'submit'}> Change </Button>
                            <Button htmlType={'button'} onClick={() => SetEditMode(false)}> Close </Button>
                        </Form.Item>
                    </Form>
                </>}
            </Card>
        </Space>
    </div>
}


export default ProfileDescriptionBlock