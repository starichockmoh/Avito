import React from "react"
import {AdsType} from "../Types/Types";
import styles from "./AdItem.module.css"
import 'antd/dist/antd.css';
import {Card, Button} from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import { NavLink } from "react-router-dom";

const { Meta } = Card;

type PropsType = AdsType

const AdItem: React.FC<PropsType> = (props) => {
    let price: string = props.price + ' ₽ ' + props.location
    return <li className={styles.AdInfo}>
        <Card
            onTabChange={(key='Heart') => {alert('dd')}}
            style={{ width: 300 }}
            cover={
                <NavLink to={'/ad/1'}>
                    <img alt="example" src= {props.image} className={styles.AdImg}/>
                </NavLink>

            }
            actions={[
                <Button type={"link"} icon={<HeartOutlined/>}> To favour</Button>
            ]}
        >
            <Meta
                title={props.name}
                description={price}
            />
        </Card>
    </li>
}


export default AdItem