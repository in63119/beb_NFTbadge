import React, { useEffect } from "react";
import { Box } from "@mui/material";
import LoginButton from "../component/LoginButton";
import LogoutButton from "../component/LogoutButton";
import Login from "../component/Login";
import { useRecoilState } from "recoil";
import { userState } from "../recoil/user";

import logo from '../images/codestatesLogo.png';

export default function Main() {
  const [user, setUser] = useRecoilState(userState);
  console.log(user);

  // useEffect(() => {
  //   if (user.isLogin) {
  //     console.log("로그인이 잘 되었다.");
  //   } else {
  //     console.log("없다.");
  //   }
  // }, [user]);
  const handleClick = () => {
    window.location.reload();
  }

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
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img src={logo} width='200px' height='200px'/>
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
          <Box sx={{ display: "flex", justifyContent: "center"}}>
            <Box sx={{cursor:"pointer"}}>
              <img src={logo} width='250px' height='250px' onClick={handleClick}/>
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                border: 1,
                width: "200px",
                padding: "5%",
                borderRadius: '12px',
                boxShadow: 3
              }}
            >
              <Login />
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mt: "5%" }}>
            {/* <LoginButton user={user} /> */}
          </Box>
        </Box>
      )}
    </Box>
  );
}
