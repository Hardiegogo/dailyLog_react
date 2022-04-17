import axios from "axios"
export const editNote=async(note,dispatchNotes)=>{
    const encodedToken=localStorage.getItem("token")
    try {
      const response=await axios({
        method:"POST",
        url:`/api/notes/${note._id}`,
        headers:{authorization:encodedToken},
        data:{note}
      })
      if(response.status===201){
        dispatchNotes({type:"SET_NOTES",payload:response.data.notes})
      }
    } catch (error) {
      console.log('error occured',error)
    }
  }