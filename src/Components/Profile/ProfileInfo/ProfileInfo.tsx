import React, {useState} from "react";
import ProfileDescriptionBlock from "./ProfileDescriptionBlock";
import {ProfileType, UserProfileType} from "../../Types/Types";
import styles from "./Profile.module.css"
import {Avatar, Button} from "antd";
import 'antd/dist/antd.css';
import { UserOutlined } from '@ant-design/icons';
import MyAds from "../MyAds/MyAds";
import {useSelector} from "react-redux";


type PropsType = {
    Profile:  UserProfileType
}

const ProfileInfo: React.FC<PropsType> = ({Profile}) => {
    let [Posts, SetPosts] = useState('my_ads')
    const onSetPostsFavour = () => {
        SetPosts('favour_ads')
    }
    const onSetPostsMy = () => {
        SetPosts('my_ads')
    }
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
            <h2><Button onClick={onSetPostsMy} type={Posts === 'my_ads'?"link":"ghost"}>My Ads</Button> </h2>
            <h2><Button onClick={onSetPostsFavour} type={Posts === 'favour_ads'?"link":"ghost"}>Favour Ads</Button> </h2>
            <MyAds UserAds = {Posts === 'my_ads' ? Profile.get_posts : Profile.selected_posts} IsSelected={Posts === 'favour_ads'}/>
        </div>
    </div>
}

export default ProfileInfo