import axios from "axios"
export const loadArchivedNotes=async (dispatchNotes)=>{
    const encodedToken=localStorage.getItem("token")
    try {
      const response=await axios({
        method:"GET",
        url:"/api/archives",
        headers:{authorization:encodedToken}
      })
      if(response.status===200){
        dispatchNotes({type:"SET_ARCHIVE_NOTES",payload:response.data.archives})
      }
  
    } catch (error) {
      console.log("error occured",error)
    }
  }