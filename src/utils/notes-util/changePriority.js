import axios from "axios";
export const changePriority=async(note,
    dispatchNotes)=>{
      const encodedToken=localStorage.getItem("token")
      const {_id, title,color, description, tags, createdAt }=note
      const changedPriority=[...tags][0]==='low'? 'high' : 'low' ;
      
      try {
        const response=await axios({
          method:"POST",
          url:`/api/notes/${note._id}`,
          headers:{authorization:encodedToken},
          data:{note:{
            _id, title, description, color, tags:[changedPriority], createdAt 
          }}
        })
        if(response.status===201){
          dispatchNotes({type:"SET_NOTES",payload:response.data.notes})
        }
      } catch (error) {
        console.log('error occured',error)
      }
    }