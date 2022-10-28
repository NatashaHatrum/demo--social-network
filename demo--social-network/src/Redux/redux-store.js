import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import usersReducer from "./users-redusers";
import {authReducer} from "./auth-reduser";
import thunkMiddleware from 'redux-thunk';
import {reducer as fromReducer} from  'redux-form'
import appReducer from "./app-reduser";


let reducers = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        sidebar: sidebarReducer,
        usersPage: usersReducer,
        auth: authReducer,
        form: fromReducer,
        app: appReducer
    });




const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


export default store;
window.___store___ = store;