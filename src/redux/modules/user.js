import produce from "immer";
import {createAction, handleActions} from "redux-actions";
import {apis} from "../../utils/apis"

const initialState = {
    list: [],
};

const CREATE_ACCOUNT = "CREATE_ACCOUNT";



const createAccount = createAction(CREATE_ACCOUNT, (signUpData) => ({signUpData}));

const createAccountMW = (signUpData) => {
    return function (dispatch, {history}) {
        apis
            .createAccountAX(signUpData)
            .then((res) => {
                dispatch(createAccount(signUpData));
            })
            .catch((err) => {
                console.log("어카운트생성에러")
            })
    }
}

export default handleActions({
    [CREATE_ACCOUNT]: (state, action) => produce(state, (draft) => {
        console.log("리듀서에받아오는사인업데이터");
        draft.list.push(action.payload.signUpData);
        console.log("리듀서어카운트리스트", draft.list);
    }),
}, initialState);

const actionCreators = {
    createAccount,
    createAccountMW,
};

export {
    actionCreators
};