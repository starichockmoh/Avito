import React from "react";
import {NavLink} from "react-router-dom";
import {Avatar, Comment, Tooltip} from "antd";
import styles from "./DialogPage.module.css"
import moment from "moment";
import {DialogsDataType} from "../../Types/Types";

type PropsType = {
    Dialog: DialogsDataType
}

const DialogItem: React.FC<PropsType> = ({Dialog}) => {
    return <div className={styles.DialogItem}>
        <Comment
            author={<NavLink to={'/'}>{Dialog.Title}</NavLink>}
            avatar={
                <Avatar
                    src={Dialog.Participant.Avatar}
                    alt="Han Solo"
                />
            }
            content={
                <div className={styles.Content}>
                    <p className = {styles.DialogBody}>
                        Чееееееел. Чел. Дай на опохмел трубы горят
                    </p>
                    <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                        <span className={styles.Date}>{moment().fromNow()}</span>
                    </Tooltip>
                </div>
            }
        />
    </div>
}

export default DialogItem