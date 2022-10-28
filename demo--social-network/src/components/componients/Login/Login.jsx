import React from 'react';
import reduxForm from "redux-form/es/reduxForm";
import {createField, Input} from "../common/FormsControls/formsControls";
import {required} from "../../../utils/Validators/validators";
import {connect} from "react-redux";
import {login} from "../../../Redux/auth-reduser";
import {Navigate} from "react-router-dom";
import classes from '../../componients/common/FormsControls/FormsControle.module.css';


const LoginForm = ({handleSubmit, error, captchaUrl}) => {

    return (
        <form onSubmit={handleSubmit}>

            {createField('Email', 'email', [required], Input)}
            {createField('Password', 'password', [required], Input, {type: 'password'})}
            {createField(null, 'rememberMe',[], Input, {type: 'checkbox'}, "remember me")}

            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && createField('Symbols from image', 'captcha',[required], Input, {}) }


                {error &&
            <div className={classes.formError}>
                {error}
            </div>}

            <div>
                <button>Login</button>
            </div>
        </form>)
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    };

    if (props.isAuth) {
        return <Navigate to={'/profileContent'}/>
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl = {props.captchaUrl} />
    </div>
};


const mupStateToProps = (state) => ({
captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,

})

export default connect(mupStateToProps, {login})(Login);