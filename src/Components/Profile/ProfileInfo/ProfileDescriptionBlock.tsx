import React from "react";
import 'antd/dist/antd.css';
import styles from "./ProfileDescriptionBlock.module.css"
import 'antd/dist/antd.css';
import {Space, Card} from 'antd';

type PropsType = {
    Name: string
    UserId: number
    Email: string
}

const ProfileDescriptionBlock: React.FC<PropsType> = ({Name, UserId, Email}) => {
    return <div >
        <Space direction="vertical">
            <Card title={Name} style={{width: 300}}>
                <div className={styles.Desc}>
                    <p><span>Full Name:</span> {Name} </p>
                    <p><span>Email:</span> {Email} </p>
                    <p><span>CompleteDeals:</span> 45 </p>
                    <p><span>On Huito with:</span> 12.05.2018 </p>
                </div>
            </Card>
        </Space>
    </div>
}


export default ProfileDescriptionBlock