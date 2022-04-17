import axios from "axios"
export const changeColor=async(changedCol,note,dispatchNotes)=>{
    const encodedToken=localStorage.getItem("token")
    const {_id, title, description, tags, createdAt }=note
    try {
      const response=await axios({
        method:"POST",
        url:`/api/notes/${note._id}`,
        headers:{authorization:encodedToken},
        data:{note:{
          _id, title, description, color:changedCol, tags, createdAt 
        }}
      })
      if(response.status===201){
        dispatchNotes({type:"SET_NOTES",payload:response.data.notes})
      }
    } catch (error) {
      console.log('error occured',error)
    }
  }