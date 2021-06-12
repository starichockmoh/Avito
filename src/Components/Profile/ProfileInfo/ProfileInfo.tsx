import React from "react";
import ProfileDescriptionBlock from "./ProfileDescriptionBlock";
import {ProfileType} from "../../Types/Types";
import styles from "./Profile.module.css"
import { Avatar } from "antd";
import 'antd/dist/antd.css';
import { UserOutlined } from '@ant-design/icons';
import MyAds from "../MyAds/MyAds";


type PropsType = {
    Profile:  ProfileType
}

const ProfileInfo: React.FC<PropsType> = ({Profile}) => {
    return <div className={styles.ProfileInfo}>
        <div className = {styles.Avatar}>
            <div className={styles.AvatarImage}>
                <Avatar size = {200} icon = {<UserOutlined/>} src={Profile.Avatar}/>
            </div>
            <h1>
                Profile
            </h1>
        </div>
        <div className = {styles.DescBlock}>
            <ProfileDescriptionBlock Deals = {Profile.Deals}
                                     Name = {Profile.Name}
                                     LastName = {Profile.LastName}
                                     LogUpData = {Profile.LogUpData}
                                     UserId = {Profile.UserId}
            />
        </div>
        <div className = {styles.Ads}>
            <h2> My Ads</h2>
            <MyAds UserAds = {Profile.UserAds}/>
        </div>

    </div>
}

export default ProfileInfo