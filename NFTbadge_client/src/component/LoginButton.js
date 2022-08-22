import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import KlipLogin from "./KlipLogin";

export default function LoginButton({ user }) {
  const [isWalletOpen, setIsWalletOpen] = useState(false);

  function handleWalletOpen(wallet) {
    switch (wallet) {
      case "klip":
        setIsWalletOpen(true);
        break;
      default:
        break;
    }
  }

  function handleWalletClose(wallet) {
    switch (wallet) {
      case "klip":
        setIsWalletOpen(false);
        break;
      default:
        break;
    }
  }

  return (
    <Box>
      <Button variant="contained" onClick={() => handleWalletOpen("klip")}>
        Login
      </Button>
      <KlipLogin
        user={user}
        open={isWalletOpen}
        onClose={() => handleWalletClose("klip")}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      />
    </Box>
  );
}
