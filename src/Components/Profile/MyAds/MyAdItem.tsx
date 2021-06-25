import React from "react"
import styles from "./MyAds.module.css"
import 'antd/dist/antd.css';
import {Card, Button, Avatar} from 'antd';
import {EyeOutlined, UserOutlined,DeleteOutlined} from '@ant-design/icons';
import {AdsType, GetUserPostType} from "../../Types/Types";
import {useDispatch} from "react-redux";
import {deleteAd} from "../../../Redux/Reducers/AdsReducer";

const { Meta } = Card;

type PropsType = {
    AdInfo: GetUserPostType
}

const MyAdItem: React.FC<PropsType> = ({AdInfo}) => {
    const dispatch = useDispatch()
    let price: string = AdInfo.price + ' ₽ Солнечногорск'
    let photo: string = 'https://carakoom.com/data/wall/787/623f28e7.jpg'
    const onDeleteAd = () => {
        dispatch(deleteAd(AdInfo.pk))
    }
    return <li className = {styles.MyAd}>
        <Card
            style={{ width: 300 }}
            cover={
                <Avatar size = {100} icon = {<UserOutlined/>} src={AdInfo.image? AdInfo.image: photo}/>
            }
            actions={[
                <Button type={"link"} icon={<EyeOutlined/>}>{AdInfo.views}</Button>,
                <Button type={"link"} icon={<DeleteOutlined/>} onClick={onDeleteAd}/>
            ]}
        >
            <Meta
                title={AdInfo.title}
                description={price}
            />
        </Card>
    </li>
}


export default MyAdItem