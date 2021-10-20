import produce from "immer";
import {createAction, handleActions} from "redux-actions";
import {apis} from "../../utils/apis"

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
};

export {
    actionCreators
};