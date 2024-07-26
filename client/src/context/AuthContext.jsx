import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    _id: "669cd3c7cab6c317176937bc", 
    username: "sherin",
    email: "sherin@g.com",
    desc:"sherin profile details",
    profilePicture: "person/1.jpeg",
    coverPicture: "",
    followers: ["669cc6ac7e5de359a6145935","669cf90414056699b9b08769"],
    following: ["669cc6ac7e5de359a6145935","669cf90414056699b9b08769"],
    isAdmin: false,
  },
  isFetching: false,
  errror: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
