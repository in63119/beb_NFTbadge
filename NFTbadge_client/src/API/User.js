import axios from "axios";

const serverAPI = `https://localhost:4000/user/testAddress`;

export async function getTestAddress(email, address) {
  try {
    const res = await axios
      .post(
        serverAPI,
        {
          email: email,
          mainAddress: address 
        },
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
