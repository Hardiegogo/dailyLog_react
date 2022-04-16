import axios from "axios"
export const loadNotes=async (dispatchNotes)=>{
    const encodedToken=localStorage.getItem("token")
    try {
      const response=await axios({
        method:"GET",
        url:"/api/notes",
        headers:{authorization:encodedToken}
      })
      if(response.status===200){
        dispatchNotes({type:"SET_NOTES",payload:response.data.notes})
      }
  
    } catch (error) {
      console.log("error occured",error)
    }
  }