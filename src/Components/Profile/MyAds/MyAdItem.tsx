import React from "react"
import styles from "./MyAds.module.css"
import 'antd/dist/antd.css';
import {Card, Button, Avatar} from 'antd';
import {EyeOutlined, UserOutlined} from '@ant-design/icons';
import {AdsType} from "../../Types/Types";

const { Meta } = Card;

type PropsType = AdsType

const MyAdItem: React.FC<PropsType> = (props) => {
    let price: string = props.price + ' ₽ ' + props.location
    return <li className = {styles.MyAd}>
        <Card
            style={{ width: 300 }}
            cover={
                <Avatar size = {100} icon = {<UserOutlined/>} src={props.image}/>
            }
            actions={[
                <Button type={"link"} icon={<EyeOutlined/>}>32</Button>
            ]}
        >
            <Meta
                title={props.name}
                description={price}
            />
        </Card>
    </li>
}


export default MyAdItem