import { createAction, handleActions } from "redux-actions";
import { produce } from "immer"; // 불변성 관리
import { storage } from "../firebase";

import { apis } from "../utils/apis";
import { actionCreators as imageActions } from "./image";
import moment from "moment";

const LOAD_POSTS = "LOAD_POSTS";
const SET_LOCATION = "SET_LOCATION";
const ADD_POST = "post/ADD_POST";
const LOADING = "post/LOADING";

const loadPosts = createAction(LOAD_POSTS, (list) => ({ list }));
const setLocation = createAction(SET_LOCATION, (location) => ({ location }));
//const setPost = createAction(SET_POST, (postList) => ({ postList }));
//const addPost = createAction(ADD_POST, (post) => ({ post }));
const loading = createAction(LOADING, (isLoading) => ({ isLoading }));

const initialState = {
  list: [],
  isLoading: false,
  location: "",
};

const initialPost = {
  roomName: "",
  cost: 0,
  contents: "",
  location: "",
  image: "",
};

const getPostList = (location) => {
  return (dispatch, { history }) => {
    apis
      .getListbyLocations(location)
      .then((res) => {
        const postList = res.data.object;
        dispatch(loadPosts(postList));
      })
      .catch((error) => {
        window.alert("게시물을 불러오는데 실패하였습니다.");
        console.error(error);
      });
  };
};

const PostMiddleWare = (contents) => {
  return function (dispatch, getState, { history }) {
    apis
      .createPost({ ...contents, cost: Number(contents.cost) })
      .then((res) => {
        window.alert("게시물 업로드 성공");
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export default handleActions(
  {
    [LOAD_POSTS]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.list;
        console.log(action.payload.list);
      }),

    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(action.payload.list);
      }),
    [SET_LOCATION]: (state, action) =>
      produce(state, (draft) => {
        draft.location = action.payload.location;
      }),
  },
  initialState
);

export const actionCreators = {
  loadPosts,
  getPostList,
  PostMiddleWare,
  setLocation,
};
