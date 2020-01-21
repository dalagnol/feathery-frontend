import Action from "../interfaces/action";
import Service from "services/Users";

export const Types = {
  LOGOUT: "user/LOGOUT",
  LOGIN: "user/LOGIN",
  LOGIN_SUCCESS: "user/LOGIN_SUCCESS",
  LOGIN_FAILURE: "user/LOGIN_FAILURE",
};

const initialState = {
  loading: false,
  error: null,
  data: JSON.parse(localStorage.getItem("user") || "null"),
};

export default function userReducer(state = initialState, action: Action) {
  switch (action.type) {
    case Types.LOGOUT:
      return { ...state, loading: false, error: null, data: null };
    case Types.LOGIN:
      return { ...state, loading: true, error: null, data: null };
    case Types.LOGIN_SUCCESS:
      return { ...state, loading: false, error: null, data: action.payload };
    case Types.LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload, data: null };
    default:
      return { ...state };
  }
}

export const Creators = {
  logout: () => async (dispatch: Function) => {
    localStorage.clear();
    dispatch({ type: Types.LOGOUT });
  },
  login: (form: any) => async (dispatch: Function) => {
    dispatch({ type: Types.LOGIN });
    try {
      const { token, user } = await Service.Authenticate(form);

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      dispatch({ type: Types.LOGIN_SUCCESS, payload: user });
    } catch (oof) {
      dispatch({ type: Types.LOGIN_FAILURE, payload: oof.message });
    }
  },
};
