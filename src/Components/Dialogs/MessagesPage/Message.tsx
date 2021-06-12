import React from "react";
import {NavLink} from "react-router-dom";
import {Comment, Tooltip, Avatar} from "antd";
import 'antd/dist/antd.css';
import moment from "moment";
import styles from "./MessagesPage.module.css"
import {MessageType} from "../../Types/Types";

type PropsType = {
    Message: MessageType
    FriendAvatar: string
    FriendName: string
}

const Message: React.FC<PropsType> = ({Message,FriendAvatar,FriendName}) => {
    return <div className={styles.Message}>
        <Comment
            avatar={
                <Avatar src={FriendAvatar}/>
            }
            author={<NavLink to={'/'}><span className={styles.MessagesAuthor}>{FriendName}</span></NavLink>}
            content={
                <p className={styles.MessagesBody}>
                    {Message.Text}
                </p>
            }
            datetime={
                <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().fromNow()}</span>
                </Tooltip>
            }
        />
    </div>
}

export default Message