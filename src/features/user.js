import produce from "immer";
import {createAction, handleActions} from "redux-actions";
import {Cookies} from "react-cookie";

import {apis} from "../utils/apis";


const initialState = {
    list: [],
    email: [],
};

const CREATE_ACCOUNT = "CREATE_ACCOUNT";
const CREATE_EMAIL = "CREATE_EMAIL";


const createAccount = createAction(CREATE_ACCOUNT, (signUpData) => ({signUpData}));
const createEmail = createAction(CREATE_EMAIL, (eMailData) => ({eMailData}));


const createAccountMW = (signUpData) => {
    return function (dispatch) {
        apis
            .createAccountAX(signUpData)
            .then((res) => {
                console.log("계정생성res", res)
                dispatch(createAccount(signUpData));
            })
            .catch((err) => {
                console.log("어카운트생성에러", err)
            })
    }
}

const loginMW = (loginData) => {
    return function (dispatch) {
        const cookies = new Cookies();
        apis
            .loginAX(loginData)
            .then((res) => {
                console.log("로그인res", res)
                if (res.data.msg === "로그인 성공했습니다") {
                    cookies.set('token', res.data.token);
                } else {
                    window.alert("로그인 실패")
                }
            }).catch((err) => {
                console.log("로그인실패", err)
            })
    }
}


export default handleActions({
    [CREATE_ACCOUNT]: (state, action) => produce(state, (draft) => {
        console.log("리듀서에받아오는사인업데이터");
        draft.list.push(action.payload.signUpData);
        console.log("리듀서어카운트리스트", draft.list);
    }),

    [CREATE_EMAIL]: (state, action) => produce(state, (draft) => {
        draft.email.push(action.payload.eMailData);
        console.log("리듀서어이메일", action.payload.eMailData);
    }),

}, initialState);

const actionCreators = {
    createAccount,
    createAccountMW,
    createEmail,
    loginMW,
};

export {
    actionCreators
};