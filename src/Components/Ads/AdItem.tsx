import React, {useState} from "react"
import {AdsType, GetUserPostType} from "../Types/Types";
import styles from "./AdItem.module.css"
import 'antd/dist/antd.css';
import {Card, Button} from 'antd';
import {EyeOutlined, HeartOutlined} from '@ant-design/icons';
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addToSelected} from "../../Redux/Reducers/AdsReducer";

const {Meta} = Card;

type PropsType = { AdInfo: GetUserPostType }

const AdItem: React.FC<PropsType> = ({AdInfo}) => {
    const dispatch = useDispatch()
    let [ShowSelectedWarning, SetSelectedWarning] = useState(false)
    const AgreeToAddSelected = () => {
        dispatch(addToSelected(AdInfo.pk))
        SetSelectedWarning(false)
    }
    const DisagreeToAddSelected = () => {
        SetSelectedWarning(false)
    }

    let price: string = AdInfo.price + ' ₽ Солнечногорск'
    let photo: string = 'https://carakoom.com/data/wall/787/623f28e7.jpg'
    return <li className={styles.AdInfo}>
        <Card
            onTabChange={(key = 'Heart') => {
                alert('dd')
            }}
            style={{width: 300}}
            cover={
                <NavLink to={'/ad/' + AdInfo.pk}>
                    <img alt="example" src={AdInfo.image ? AdInfo.image : photo} className={styles.AdImg}/>
                </NavLink>

            }
            actions={[
                <Button type={"link"} icon={<HeartOutlined/>} onClick={() => SetSelectedWarning(true)}> To
                    favour</Button>,
                <Button type={"link"} icon={<EyeOutlined/>}> {AdInfo.views}</Button>,
                ShowSelectedWarning ?
                    <>
                        <p>Are you sure add to Favour?</p>
                        <p><Button type={"link"} onClick={AgreeToAddSelected}> Yes! </Button></p>
                        <p><Button type={"link"} onClick={DisagreeToAddSelected}> No </Button></p>
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


export default AdItem