import axios from "axios";

const serverAPI = `http://localhost:4000/user`;

export async function getTestAddress(body) {
  try {
    const res = await axios
      .post(
        serverAPI,
        body,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.status === 200) {
          return res.data.result;
        }
      });
    return res;
  } catch (error) {
    throw new Error(error);
  }
}
