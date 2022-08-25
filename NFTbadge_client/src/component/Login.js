import React, { useEffect } from "react";
import { Box, TextField } from "@mui/material";
import { useRecoilState } from "recoil";
import { userState } from "../recoil/user";
import { postUser } from "../API/Login";

export default function Login() {
  const [user, setUser] = useRecoilState(userState);
  const handleOnChange = (e) => {
    postUser(e.target.value);
  }

  return (
    <Box>
      <TextField id="standard-basic" label="수강생의 이름을 적어주세요" variant="standard" onChange={handleOnChange}     />
    </Box>
  );
}
