import produce from "immer";
import { createAction, handleActions } from "redux-actions";

const initialState = {
  login: false,
  login_B: false,
  signup: false,
  welcome: false,
  templogin: false,
};

const LOGIN = "LOGIN";
const LOGIN_B = "LOGIN_B";
const SIGNUP = "SIGN_UP";
const WELCOME = "WELCOME";
const TEMPLOGIN = "TEMPLOGIN";

const ShowLogin = createAction(LOGIN, (boolean) => ({ boolean }));
const ShowLogin_B = createAction(LOGIN_B, (boolean) => ({ boolean }));
const ShowSignup = createAction(SIGNUP, (boolean) => ({ boolean }));
const ShowWelcome = createAction(WELCOME, (boolean) => ({ boolean }));
const ShowTempLogin = createAction(TEMPLOGIN, (boolean) => ({ boolean }));

export default handleActions(
  {
    [LOGIN]: (state, action) =>
      produce(state, (draft) => {
        draft.login = action.payload.boolean;
      }),

    [LOGIN_B]: (state, action) =>
      produce(state, (draft) => {
        draft.login_B = action.payload.boolean;
      }),

    [SIGNUP]: (state, action) =>
      produce(state, (draft) => {
        draft.signup = action.payload.boolean;
      }),

    [WELCOME]: (state, action) =>
      produce(state, (draft) => {
        draft.welcome = action.payload.boolean;
      }),

    [TEMPLOGIN]: (state, action) =>
      produce(state, (draft) => {
        draft.templogin = action.payload.boolean;
        console.log("템프로그인", action.payload.boolean);
      }),
  },
  initialState
);

const actionCreators = {
  ShowLogin,
  ShowLogin_B,
  ShowSignup,
  ShowWelcome,
  ShowTempLogin,
};

export { actionCreators };
