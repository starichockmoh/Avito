import React from "react";
import 'antd/dist/antd.css';
import styles from "./ProfileDescriptionBlock.module.css"
import 'antd/dist/antd.css';
import {Space, Card} from 'antd';

type PropsType = {
    Deals : number
    Name: string
    LastName: string
    LogUpData: string
    UserId: number
}

const ProfileDescriptionBlock: React.FC<PropsType> = ({Deals, LastName, LogUpData, Name, UserId}) => {
    return <div >
        <Space direction="vertical">
            <Card title={Name} style={{width: 300}}>
                <div className={styles.Desc}>
                    <p><span>Full Name:</span> {Name}  {LastName}</p>
                    <p><span>CompleteDeals:</span> {Deals}</p>
                    <p><span>On Huito with:</span> {LogUpData}</p>
                </div>
            </Card>
        </Space>
    </div>
}


export default ProfileDescriptionBlock