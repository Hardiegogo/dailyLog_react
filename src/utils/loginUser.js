import axios from "axios";
export const loginUser = async (
  { email, password },
  authState,
  dispatchAuth,
  navigate
) => {
  console.log(email, password);
  try {
    const res = await axios.post("/api/auth/login", {
      email,
      password,
    });
    if (res.status === 200) {
      localStorage.setItem("token", res.data.encodedToken);
      dispatchAuth({ type: "USER_LOGIN", payload: res.data.foundUser });
      navigate('/notes',{replace:true})
    }
  } catch (error) {
    console.log("error occured", error);
  }
};
