export const notesReducer = (state, action) => {
  switch (action.type) {
    case "SET_NOTES":
    case "ADD_NOTE":
      return {
        ...state,
        notes: action.payload,
      };
    case "SET_ARCHIVE_NOTES":
      return {
        ...state,
        archivedNotes: action.payload,
      };
    case "ADD_TO_ARCHIVE":
    case "RESTORE_FROM_ARCHIVE":
      return {
        ...state,
        archivedNotes: action.archivedNotes,
        notes: action.notes,
      };
    case "ADD_TO_TRASH_FROM_NOTES":
      return {
        ...state,
        notes: action.notes,
        trashNotes: [...state.trashNotes, action.trashNote],
      };
    case "ADD_TO_TRASH_FROM_ARCHIVES":
      return {
        ...state,
        archivedNotes: action.archivedNotes,
        trashNotes: [...state.trashNotes, action.trashNote],
      };
    case "RESTORE_FROM_TRASH":    
    case "DELETE_NOTE":
      return{
        ...state,
        trashNotes:state.trashNotes.filter((item)=>item._id!==action.trashNote._id)
      }
    case "SET_EDIT_ID":
      return{
        ...state,
        editId:action.payload
      }
    case "SET_PRIORITY":
      console.log(action)
      return{
        ...state,
        filterByPriority:action.payload
      }
    default:
      return state;
  }
};
