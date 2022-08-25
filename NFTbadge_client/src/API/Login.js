import axios from "axios";

const serverAPI = `https://localhost:4000/user`;

export async function postUser(body) {
  try {
    const res = await axios
      .post(
        serverAPI,
        {name: body},
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
        }
        
      });
    return res;
  } catch (error) {
    throw new Error(error);
  }
}