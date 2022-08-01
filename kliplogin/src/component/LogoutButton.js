import React from "react";
import { Box, Button } from "@mui/material";
import { useSetRecoilState } from "recoil";
import { userState } from "../recoil/user";

export default function LoginButton() {
  const setUser = useSetRecoilState(userState);

  const handleLogout = () => {
    setUser({
      isLogin: false,
      mainAddress: "",
      testAddress: "",
    });
  };

  return (
    <Box>
      <Button variant="contained" onClick={() => handleLogout()}>
        Logout
      </Button>
    </Box>
  );
}
