import React from "react";
import styles from "./MessagesPage.module.css";
import {Comment, Tooltip} from "antd";
import moment from "moment";
import {MessageType} from "../../Types/Types";

type PropsType = {
    Message: MessageType
}

const MyMessage: React.FC<PropsType> = ({Message}) => {
    return <div className={styles.MyMessage}>
        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
            <span className = {styles.MyMessageDate}>{moment().fromNow()}</span>
        </Tooltip>
        <Comment
            content={
                <p className={styles.MessagesBody}>
                    {Message.Text}
                </p>
            }
        />

    </div>
}

export default MyMessage