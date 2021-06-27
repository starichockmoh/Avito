import React, {useState} from "react";
import {CommentType} from "../Types/Types";
import styles from "./AdInfo.module.css"
import 'antd/dist/antd.css';
import {Comment, Avatar, Tooltip, Space, Button, Form} from "antd";
import {EyeOutlined, LikeOutlined, LikeFilled} from '@ant-design/icons';
import {NavLink} from "react-router-dom";
import TextArea from "antd/es/input/TextArea";
import moment from "moment";


type PropsType = {
    Comments: Array<CommentType>
    UserAvatar: string
}

const Comments: React.FC<PropsType> = ({Comments, UserAvatar}) => {
    let ArrayComments: Array<JSX.Element> = []
    if (Comments) {
        ArrayComments = Comments.map(c => <CommentItem CommentInfo={c}/>)
    }
    return <div className={styles.Comment}>
        <Space direction={"vertical"}>
            <CommentInput UserAvatar={UserAvatar}/>
            {ArrayComments && ArrayComments}
        </Space>

    </div>
}


const CommentInput: React.FC<{ UserAvatar: string }> = ({UserAvatar}) => {
    return <div>
        <Comment content={
            <>
                <Form.Item>
                    <TextArea rows={4}/>
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" type="primary">
                        Add Comment
                    </Button>
                </Form.Item>
            </>}
                 avatar={
                     <Avatar src={UserAvatar}/>
                 }/>
    </div>
}

type CommentPropsType = {
    CommentInfo: CommentType
}

const CommentItem: React.FC<CommentPropsType> = ({CommentInfo}) => {
    const [likes, setLikes] = useState(false);
    const like = () => {
        setLikes(!likes);
    };

    const actions = [
        <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
          <span className="comment-action">{likes ? <><LikeFilled/> {CommentInfo.Likes + 1 + ' '}</> : <>
              <LikeOutlined/>{CommentInfo.Likes + ' '}</>}</span>
          <span><EyeOutlined/>{CommentInfo.Views}</span>
      </span>
        </Tooltip>,

    ];
    return (
        <Comment
            actions={actions}
            author={<NavLink to={'/'}>{CommentInfo.Author}</NavLink>}
            avatar={
                <Avatar
                    src={CommentInfo.Avatar}
                    alt="Han Solo"
                />
            }
            content={
                <p>
                    {CommentInfo.Body}
                </p>
            }
            datetime={
                <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().fromNow()}</span>
                </Tooltip>
            }
        />
    );
}

export default Comments