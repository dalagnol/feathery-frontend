import Action from "../interfaces/action";

export const Types = {
  LOGOUT: "user/LOGOUT",
};

const initialState = {
  token: localStorage.getItem("token"),
  loading: false,
  error: null,
  data: JSON.parse(localStorage.getItem("user") || "{}"),
};

export default function userReducer(state = initialState, action: Action) {
  switch (action.type) {
    case Types.LOGOUT:
      return { ...state, token: null, loading: false, error: null, data: null };
    default:
      return { ...state };
  }
}

export const Creator = {
  logout: () => async (dispatch: Function) => {
    localStorage.clear();
    dispatch({ type: Types.LOGOUT });
  },
};
