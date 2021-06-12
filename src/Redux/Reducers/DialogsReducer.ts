import {DialogsDataType, DialogType} from "../../Components/Types/Types";

type InitialStateType = {
    Dialogs: Array<DialogsDataType>
    Dialog: DialogType


}

let InitialState: InitialStateType = {
    Dialogs: [
        {
            Participant: {
                Avatar: 'https://get.wallhere.com/photo/white-T-shirt-sunglasses-glasses-photography-moustache-military-boy-cool-man-beard-cigar-vision-care-facial-hair-eyewear-stern-human-behavior-790615.jpg',
                User: 'Mark',
                UserId: 3
            }, DialogId: 1, Title: 'Mark'
        },
        {
            Participant: {
                Avatar: 'https://get.wallhere.com/photo/white-T-shirt-sunglasses-glasses-photography-moustache-military-boy-cool-man-beard-cigar-vision-care-facial-hair-eyewear-stern-human-behavior-790615.jpg',
                User: 'Mark',
                UserId: 3
            }, DialogId: 1, Title: 'Mark'
        }
    ],
    Dialog: {
        DialogId: 1, Messages: [
            {MessageId: '1', Sender: 1, Text: 'Upiuu', Thread: 1},
            {MessageId: '2', Sender: 3, Text: 'arara', Thread: 1},
            {MessageId: '3', Sender: 3, Text: 'Whata Fuckk', Thread: 1},
            {MessageId: '4', Sender: 3, Text: 'Kuda??', Thread: 1},
            {MessageId: '5', Sender: 1, Text: 'Upiuu', Thread: 1}
        ],
        Participant: {Avatar: 'https://get.wallhere.com/photo/white-T-shirt-sunglasses-glasses-photography-moustache-military-boy-cool-man-beard-cigar-vision-care-facial-hair-eyewear-stern-human-behavior-790615.jpg', User: 'Mark', UserId: 3}, Title: 'Mark'
    }
}

const DialogReducer = (state = InitialState, action: any): InitialStateType => {
    switch (action.type) {
        default:
            return state
    }
}


export default DialogReducer

