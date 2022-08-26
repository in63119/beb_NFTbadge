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
        if (res.data.data.length >= 1) {
          let someData = res.data.data;
          let result = [];
          someData.forEach(i => {
            result.push(i.email);
          })
          // console.log(result);
          return result;
        } else {
          return false;
        }
      });
    if (res) {
      // console.log(res);
      return res;
    }
  } catch (error) {
    throw new Error(error);
  }
}