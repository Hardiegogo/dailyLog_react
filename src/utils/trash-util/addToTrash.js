import { addNote } from "../notes-util/addNote";
import axios from "axios";
export const addToTrash=async(trashNote,dispatchNotes,isArchived,isTrash)=>{
    const encodedToken=localStorage.getItem("token")
    if(isTrash){
        addNote(trashNote,dispatchNotes);
        dispatchNotes({type:"RESTORE_FROM_TRASH",trashNote:trashNote})
    }else{
        if(!isArchived){
            try {
                const response=await axios({
                    method:"DELETE",
                    url:`/api/notes/${trashNote._id}`,
                    headers:{authorization:encodedToken}
                })
                if(response.status===200){
                    dispatchNotes({type:"ADD_TO_TRASH_FROM_NOTES",notes:response.data.notes,trashNote:trashNote})
                }
            } catch (error) {
                console.log("error occured",error)
            }
        }else if(isArchived){
            try {
                const response=await axios({
                    method:"DELETE",
                    url:`/api/archives/delete/${trashNote._id}`,
                    headers:{authorization:encodedToken}
                })
                if(response.status===200){
                    dispatchNotes({type:"ADD_TO_TRASH_FROM_ARCHIVES",archivedNotes:response.data.archives,trashNote:trashNote})
                }
            } catch (error) {
                console.log("error occured",error)
            }
        }
    }
    
}