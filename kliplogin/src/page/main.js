import React, { useEffect } from "react";
import { Box, Button } from "@mui/material";
import LoginButton from "../component/LoginButton";
import LogoutButton from "../component/LogoutButton";
import GetTestAddressButton from "../component/GetTestAddressButton";
import { useRecoilState } from "recoil";
import { userState } from "../recoil/user";

export default function Main() {
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    if (user.isLogin) {
      console.log("로그인이 잘 되었다.");
    } else {
      console.log("없다.");
    }
  }, [user]);
  return (
    <Box>
      {user.isLogin ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center", my: "5%" }}>
            로그인 후 메인화면
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                border: 1,
                width: "75%",
                padding: "5%",
              }}
            >
              <Box sx={{ mb: "5%" }}>Main net Address: {user.mainAddress}</Box>
              <Box>Test net Address: {user.testAddress}</Box>
              {/* <GetTestAddressButton user={user} /> */}
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mt: "5%" }}>
            <LogoutButton />
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center", my: "5%" }}>
            메인 화면
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                border: 1,
                width: "75%",
                padding: "5%",
              }}
            >
              <Box>이 곳은 유저 정보 창</Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mt: "5%" }}>
            <LoginButton user={user} />
          </Box>
        </Box>
      )}
    </Box>
  );
}
