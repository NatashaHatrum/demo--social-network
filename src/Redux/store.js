import profileReducer from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It`s my first post', likesCount: 10},
                {id: 3, message: 'This super day!', likesCount: 102},

            ],
            newPostText: 'lala'
        },
        dialogsPage: {
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

            newMessageBody: ''
        },
        sidebar: {
            users: [
                {id: 1, name: 'Jasza'},
                {id: 2, name: 'Baflo'},
                {id: 3, name: 'Czercz'},
            ]
        },
    },

    getState() {
        return this._state;

    },
    _callSubscriber() {
        console.log('State changed');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch (action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;
