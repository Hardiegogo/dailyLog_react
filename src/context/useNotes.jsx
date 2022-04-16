import { createContext,useContext,useReducer } from "react";


const NotesContext=createContext(null)

export const useNotes=()=>useContext(NotesContext)

const notesReducer=(state,action)=>{
    switch(action.type){
        case "SET_NOTES":
            return {
                ...state,
                notes:action.payload
            }
        case "ADD_NOTE":
            return {
                ...state,
                notes:action.payload
            }
            
        default:
            return state
    }
}

const initialState={
    notes:[],
    trashNotes:[],
    archiveNotes:[],
    currentNote:{
        _id:'',
        title:'',
        description:'',
        color:'',
        createdAt:'',
        tags:[]
    }
}

export const NotesProvider=({children})=>{
    const [notesState,dispatchNotes]=useReducer(notesReducer,initialState)
    return <NotesContext.Provider value={{notesState,dispatchNotes}}>
        {children}
    </NotesContext.Provider>
}