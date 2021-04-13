import axios from "axios";
import { FETCH_USER } from "./types";
export const fetchUser = () => {
  return async function (dispatch) {
    //redux thunk is used 08:05 video 20
    const res = await axios.get("/api/current_user");
    dispatch({ type: FETCH_USER, payload: res.data });
  };
};
