export const calcTempNote=(notesState)=>{
    const {editId,notes}=notesState;
    let initialNoteState;
    if(!editId){
      initialNoteState={
        _id: "",
        title: "",
        description: "",
        color: "",
        tags: ['low'],
        createdAt:
          new Date().getFullYear() +
          "-" +
          (new Date().getMonth() + 1) +
          "-" +
          new Date().getDate(),
      }
      return initialNoteState;
      
    }else{
      const editNote=notes.find((note)=>note._id===editId)
      initialNoteState={...editNote}
      return initialNoteState;
      
    }
    
  }