import React from "react";
import { Box, Button } from "@mui/material";
import { getTestAddress } from "../API/User";
import { userState } from "../recoil/user";
import { useSetRecoilState } from "recoil";

export default function GetTestAddressButton({ user }) {
  const setUser = useSetRecoilState(userState);

  const handleGetTestAddress = async () => {
    const testAddress = await getTestAddress(user);
    console.log(testAddress, user);
  };

  return (
    <Box>
      <Button variant="contained" onClick={() => handleGetTestAddress()}>
        Get Test Address
      </Button>
    </Box>
  );
}
