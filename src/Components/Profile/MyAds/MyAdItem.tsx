import React, {useState} from "react"
import styles from "./MyAds.module.css"
import 'antd/dist/antd.css';
import {Card, Button, Avatar} from 'antd';
import {EyeOutlined, UserOutlined, DeleteOutlined} from '@ant-design/icons';
import {AdsType, GetUserPostType} from "../../Types/Types";
import {useDispatch} from "react-redux";
import {deleteAd} from "../../../Redux/Reducers/AdsReducer";
import {NavLink} from "react-router-dom";

const {Meta} = Card;

type PropsType = {
    AdInfo: GetUserPostType
    IsSelected: boolean
}

const MyAdItem: React.FC<PropsType> = ({AdInfo, IsSelected}) => {
    const [ShowDeletePostWarning, SetDeleteWarning] = useState(false)
    const dispatch = useDispatch()
    let price: string = AdInfo.price + ' ₽ Солнечногорск'
    let photo: string = 'https://carakoom.com/data/wall/787/623f28e7.jpg'
    const onDeleteAd = () => {
        dispatch(deleteAd(AdInfo.pk))
        SetDeleteWarning(false)
    }
    return <li className={styles.MyAd}>
        <Card
            style={{width: 300}}
            cover={
                <NavLink to={'/ad/' + AdInfo.pk}>
                    <Avatar size={100} icon={<UserOutlined/>} src={AdInfo.image ? AdInfo.image : photo}/>
                </NavLink>
            }
            actions={[
                <Button type={"link"} icon={<EyeOutlined/>}> {AdInfo.views}</Button>,
                !IsSelected && <Button type={"link"} icon={<DeleteOutlined/>} onClick={() => SetDeleteWarning(true)}/>,
                ShowDeletePostWarning ?
                    <>
                        <p>Are you sure delete ad?</p>
                        <p><Button type={"link"} onClick={onDeleteAd}> Yes </Button></p>
                        <p><Button type={"link"} onClick={() => SetDeleteWarning(false)}> No </Button></p>
                    </> : <>Created: <br/>{AdInfo.created_at.substring(0, 7)}</>
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