import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { actionCreators as modalActions } from "../redux/modules/modal";
import Login from "./Login";
import LoginB from "./LoginB";
import Signup from "./Signup";
import Welcome from "./Welcome";
import Templogin from "./Templogin";

const Tempmain = (props) => {

    const dispatch = useDispatch();
    const loginCtrl = useSelector((state) => state.modal.login);
    const loginCtrlB = useSelector((state) => state.modal.login_B);
    const signUpCtrl = useSelector((state) => state.modal.signup);
    const welcomeCtrl = useSelector((state) => state.modal.welcome);
    const tempLoginCtrl = useSelector((state) => state.modal.templogin);

    const openLogin = () => {
        dispatch(modalActions.ShowLogin(true));
    };

    return(
        <React.Fragment>
            <button onClick={openLogin}>modal</button>
            {loginCtrl ? <Login/> : null}
            {loginCtrlB ? <LoginB/> : null}
            {signUpCtrl ? <Signup/> : null}
            {welcomeCtrl ? <Welcome/> : null}
            {tempLoginCtrl ? <Templogin/> : null}
        </React.Fragment>
    )
}



export default Tempmain;