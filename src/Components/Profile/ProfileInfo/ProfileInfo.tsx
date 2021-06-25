import React from "react";
import ProfileDescriptionBlock from "./ProfileDescriptionBlock";
import {ProfileType, UserProfileType} from "../../Types/Types";
import styles from "./Profile.module.css"
import { Avatar } from "antd";
import 'antd/dist/antd.css';
import { UserOutlined } from '@ant-design/icons';
import MyAds from "../MyAds/MyAds";


type PropsType = {
    Profile:  UserProfileType
}

const ProfileInfo: React.FC<PropsType> = ({Profile}) => {
    let avatar: string =  'https://vraki.net/sites/default/files/inline/images/30_55.jpg'
    return <div className={styles.ProfileInfo}>
        <div className = {styles.Avatar}>
            <div className={styles.AvatarImage}>
                <Avatar size = {200} icon = {<UserOutlined/>} src={avatar}/>
            </div>
            <h1>
                Profile
            </h1>
        </div>
        <div className = {styles.DescBlock}>
            <ProfileDescriptionBlock Name = {Profile.username}
                                     Email={Profile.email}
                                     UserId = {Profile.pk}
            />
        </div>
        <div className = {styles.Ads}>
            <h2> My Ads</h2>
            <MyAds UserAds = {Profile.get_posts}/>
        </div>
    </div>
}

export default ProfileInfo