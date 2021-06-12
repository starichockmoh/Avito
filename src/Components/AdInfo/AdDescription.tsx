import React from "react";
import styles from "./AdInfo.module.css"
import {EyeOutlined, EditOutlined} from '@ant-design/icons';
import {Space} from "antd";
type PropsType = {
    AdId: number
    Author: string
    Created_at: string
    Price: number
    Title: string
    Views: number
    Description: string

}

const AdDescription: React.FC<PropsType> = ({AdId,Author, Created_at, Price, Title,Views,Description }) => {
    return <div className={styles.Desc}>
        <h2>{Price} ₽ </h2>
        <p><EyeOutlined/> {Views}</p>
        <Space direction={"vertical"} style={{width: 800}}>
            {Description}
        </Space>
        <p>
            <span className={styles.AdCreated}>Created at: {Created_at}</span>
        </p>
        <p>
            <span className={styles.AdAuthor}>Author: {Author}</span>
        </p>
        <p>
            Write to author <EditOutlined />
        </p>
    </div>
}

export default AdDescription