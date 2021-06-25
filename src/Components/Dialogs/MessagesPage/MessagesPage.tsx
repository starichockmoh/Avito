import React from "react";
import {AppStateType} from "../../../Redux/Store";
import {compose} from "redux";
import {connect} from "react-redux";
import Message from "./Message";
import styles from "./MessagesPage.module.css"
import MyMessage from "./MyMessage";
import TextArea from "antd/es/input/TextArea";
import {Button} from "antd";
import {DialogType} from "../../Types/Types";
import withAuthRedirect from "../../../HOCs/withAuthRedirect";

// type MapStateToPropsType = {
//     Dialog: DialogType
//     CurrentUserId: number
// }
// type MapDispatchToPropsType = {}
//
// type PropsType = MapStateToPropsType & MapDispatchToPropsType

class MessagesPage extends React.Component{
    render() {
        // let FriendAvatar = this.props.Dialog.Participant.Avatar
        // let FriendName = this.props.Dialog.Participant.User
        // let MessagesArray = this.props.Dialog.Messages.map(m => {
        //     if (m.Sender === this.props.CurrentUserId) {
        //         return <MyMessage key = {m.MessageId} Message={m}/>
        //     }
        //     return <Message FriendAvatar = {FriendAvatar} key = {m.MessageId} Message={m} FriendName={FriendName}/>
        // })
        return <div>
            {/*{MessagesArray}*/}
            {/*<TextArea/>*/}
            {/*<Button>Send</Button>*/}
        </div>
    }
}

export default MessagesPage