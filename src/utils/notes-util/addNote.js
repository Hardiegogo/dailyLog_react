import axios from "axios"
export const addNote=async(note,dispatchNotes)=>{
    const encodedToken=localStorage.getItem("token")
    try {
      const res=await axios({
        method:"POST",
        url:"/api/notes",
        headers:{authorization:encodedToken},
        data:{note}
      })
      if(res.status===201){
        dispatchNotes({type:"ADD_NOTE",payload:res.data.notes})
      }
    } catch (error) {
      console.log("error occured",error)
    }
  }
  