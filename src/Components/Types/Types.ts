export type UserProfileType = {
    email: string
    get_posts: Array<GetUserPostType>
    pk: number
    selected_posts: Array<GetUserPostType>
    username: string
}
export type GetUserPostType = {
    created_at: string
    image: NullableType<string>
    pk: number
    price: number
    rubric: number
    title: string
    views: number
}

export type TrueAdInfoType = {
    author: string
    created_at: string
    get_aditionall_image: Array<any>
    get_comments: Array<any>
    image: NullableType<string>
    pk: number
    price: number
    title: string
    views: number
}

export type TrueCommentType = {

}
export type AdsType = {
    name: string
    price: number
    image: string
    location: string
    id: number
}

export type ProfileType = {
    Name: string
    LastName: string
    Avatar: string
    Photos: Array<string> | null
    UserId: number
    UserAds: Array<AdsType>
    Deals: number
    LogUpData: string
}

export type AdInfoType = {
    AdId: number
    Description: string
    Author: string
    Title: string
    Images: Array<string> | null
    Price: number
    Created_at: string
    Views: number
    Comments: Array<CommentType>
}

export type CommentType = {
    CommentId: number
    Body: string
    Likes: number
    Views: number
    Author: string
    Avatar: string
    UserId: number
}
export type ParticipantType = {
    UserId: number
    Avatar: string
    User: string

}

export type DialogsDataType = {
    DialogId: number
    Title: string
    Participant: ParticipantType
}

export type DialogType = {
    DialogId: number
    Participant: ParticipantType
    Title: string
    Messages: Array<MessageType>

}

export type MessageType = {
    MessageId: string
    Text: string
    Sender: number
    Thread: number
}

export type NullableType<MT> = null | MT

type PropertiesType<T> = T extends {[key: string]: infer U} ? U : never

export type ActionsType<T extends {[key: string]: (...arg: any[]) => any} > = ReturnType<PropertiesType<T>>