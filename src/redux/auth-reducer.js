import * as axios from 'axios';
import { stopSubmit } from 'redux-form';

const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAIL = 'SIGN_UP_FAIL';


let initialState = {
    isOpen: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                isOpen: true
            }
        case SIGN_UP_FAIL:
            return {
                ...state,
                isOpen: false
            }
        default:
            return state;
    }
}



export const signup = (email, first_name, last_name, password, re_password ) => async (dispatch) => {
    if ( password === re_password ) {
        try {
            const config = {
                headers: { 'Content-Type': 'application/json' }
            }
            const body = JSON.stringify({ email, first_name, last_name,  password, re_password });

            const res = await axios.post(`https://e-men.kz/api/v1/auth/moderators/`, body, config)
            console.log(res);

            dispatch({ type: SIGN_UP_SUCCESS });

        } catch (err) {
            dispatch({ type: SIGN_UP_FAIL });
            dispatch(stopSubmit('app', { _error: "Такой адрес электронной почты уже существует. Пожалуйста, введите другой адрес электронной почты." }))
            
        }
    } else {
        console.log('HERE');
        dispatch(stopSubmit('app', {'password2': 'Пароли не совпадают'}))
    }
}

export default authReducer;