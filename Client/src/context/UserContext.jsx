import {createContext} from "react";

const UserContext = createContext({
    loggedIn:"Default User",
    dummyData: 1,
});

export default UserContext;


