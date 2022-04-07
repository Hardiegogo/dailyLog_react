import { createContext ,useReducer,useContext} from "react"

const AuthContext=createContext(null)

export const useAuth=()=>useContext(AuthContext)

const initalAuthState={
    isUserActive:localStorage.getItem("token")?true:false,
    userDetails:{}
}

const authReducer=(state,action)=>{
    switch(action.type){
        case "USER_SIGNUP":
            return{
                ...state,
                isUserActive:true,
                userDetails:action.payload
            }
        case "USER_LOGIN":
            return {
                ...state,
                isUserActive:true,
                userDetails:action.payload
            }
        case "USER_LOGOUT":
            localStorage.removeItem('token');
            return{
                ...state,
                isUserActive:false,
                userDetails:{}
            }
        default:
            return state
    }

}

export const AuthProvider=({children})=>{
    const [authState,dispatchAuth]=useReducer(authReducer,initalAuthState)
    return <AuthContext.Provider value={{authState,dispatchAuth}}>
        {children}
    </AuthContext.Provider>
}