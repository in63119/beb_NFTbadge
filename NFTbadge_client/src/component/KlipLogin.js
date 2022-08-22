import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import QRCode from "qrcode.react";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
  DialogActions,
} from "@mui/material";
import { RefreshRounded } from "@mui/icons-material";
import { postPrepare, getResult } from "../API/Klip";
import { getTestAddress } from "../API/User";
import useInterval from "../hooks/useInterval";
import { useSetRecoilState } from "recoil";
import { userState } from "../recoil/user";

function makeQRURL(requestKey) {
  return `https://klipwallet.com/?target=/a2a?request_key=${requestKey}`;
}

const intialRemainingTime = 120;

export default function KlipLogin({ open, onClose, user }) {
  const setUser = useSetRecoilState(userState);
  const [requestKey, setRequestKey] = useState("");
  const [remaining, setRemaining] = useState(0);
  const requestPostPrepare = async () => {
    setRequestKey(await postPrepare());
    setRemaining(intialRemainingTime);
  };

  useEffect(() => {
    if (open) {
      requestPostPrepare();
    }
  }, [open]);

  useInterval(
    async () => {
      if (requestKey.length > 0) {
        setRemaining(remaining - 1);

        const address = await getResult(requestKey);
        if (address) {
          const secondAddress = await getTestAddress(user);
          setUser({
            isLogin: true,
            mainAddress: address,
            testAddress: secondAddress,
          });
          onClose();
        }
      }
    },
    open && remaining > 0 ? 1000 : null
  );

  return (
    <Dialog
      open={open}
      onClose={() => onClose()}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Klip 지갑 로그인</DialogTitle>
      <DialogContent>
        <Box
          sx={{
            backgroundColor: "text.primary",
            borderRadius: 1,
            position: "relative",
          }}
        >
          <QRCode
            value={makeQRURL(requestKey)}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
        <DialogContentText id="alert-dialog-description" sx={{ mt: 2, mb: 2 }}>
          남은 시간 {remaining}초
        </DialogContentText>
        {remaining <= 0 && (
          <Button
            variant="contained"
            startIcon={<RefreshRounded />}
            fullWidth
            onClick={requestPostPrepare}
          >
            재로그인
          </Button>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClose()} autoFocus>
          취소
        </Button>
      </DialogActions>
    </Dialog>
  );
}

KlipLogin.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
