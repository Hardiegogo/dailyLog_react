import axios from "axios"
export const addOrRemoveFromArchive=async(archivedNote,dispatchNotes,isArchived)=>{
    const encodedToken=localStorage.getItem("token")
    if(!isArchived){
        try {
            const response=await axios({
                method:"POST",
                url:`/api/notes/archives/${archivedNote._id}`,
                headers:{authorization:encodedToken},
                data:{archivedNote}
            })
            if(response.status===201){
                dispatchNotes({type:"ADD_TO_ARCHIVE",notes:response.data.notes,archivedNotes:response.data.archives})
            }
        } catch (error) {
            
        }
    }else if(isArchived){
        try {
            const response=await axios({
                method:"POST",
                url:`/api/archives/restore/${archivedNote._id}`,
                headers:{authorization:encodedToken},
            })
            if(response.status===200){
                dispatchNotes({type:"RESTORE_FROM_ARCHIVE",notes:response.data.notes,archivedNotes:response.data.archives})
            }
        } catch (error) {
            
        }
    }
    
}