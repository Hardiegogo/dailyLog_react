import { createContext, useContext, useReducer } from "react";
import { notesReducer } from "../reducers/notesReducer";

const NotesContext = createContext(null);

export const useNotes = () => useContext(NotesContext);

const initialState = {
  notes: [],
  trashNotes: [],
  archivedNotes: [],
  currentNote: {
    _id: "",
    title: "",
    description: "",
    color: '#6EE7B7',
    createdAt: "",
    tags: ['low'],
    filterByPriority:'',
    sortByDate:''

  },
  editId:'',

};

export const NotesProvider = ({ children }) => {
  const [notesState, dispatchNotes] = useReducer(notesReducer, initialState);
  return (
    <NotesContext.Provider value={{ notesState, dispatchNotes }}>
      {children}
    </NotesContext.Provider>
  );
};
