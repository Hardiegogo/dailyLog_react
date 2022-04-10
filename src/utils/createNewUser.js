import axios from "axios";

export const createNewUser = async (
  { firstName, lastName, email, password },
  authState,
  dispatchAuth,
  navigate
) => {
  try {
    const response = await axios({
      method: "POST",
      url: "/api/auth/signup",
      data: {
        firstName,
        lastName,
        email,
        password,
      },
    });
    if(response.status===201){
      localStorage.setItem('token',response.data.encodedToken)
      dispatchAuth({type:"USER_SIGNUP",payload:response.data.createdUser})
      navigate('/notes',{replace:true})
    }
  } catch (error) {
    console.log("error occured", error.response.data);
  }
};
