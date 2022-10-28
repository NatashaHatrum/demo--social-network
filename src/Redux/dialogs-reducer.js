
const SEND_MESSAGE = 'SEND-MESSAGE';


let initiallState = {
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo-yo!'}
    ],
    dialogs: [
        {id: 1, name: 'Paweł'},
        {id: 2, name: 'Natasza'},
        {id: 3, name: 'Irina'},
        {id: 4, name: 'łukasz'},
        {id: 5, name: 'Oksana'},
        {id: 6, name: 'Siarchej'},
        {id: 7, name: 'Mikołaj'},
        {id: 8, name: 'Izabella'},
        {id: 9, name: 'Zbigniew'}],


};

export const dialogsReducer = (state = initiallState, action) => {

    switch (action.type) {


        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: body}],
            };                                                                        //При нажатии кнопки отправка сообщения.Затем создаем Creator ниже

        default:
            return state;
    }
}


export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})


export default dialogsReducer;