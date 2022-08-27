import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import QRCode from "qrcode.react";
import {
  Button,
  Card, CardContent, Typography
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

export default function KlipLogin({ open, email }) {
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
          const secondAddress = await getTestAddress(email, address);
          setUser({
            isLogin: true,
            mainAddress: address,
            testAddress: secondAddress,
          });
        }
      }
    },
    remaining > 0 ? 1000 : null
  );

  return (
    <Card
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>QR Code를 통해 로그인하세요</Typography>
        <QRCode
          value={makeQRURL(requestKey)}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
        <Typography id="alert-dialog-description" sx={{ mt: 2, mb: 2 }}>
          남은 시간 {remaining}초
        </Typography>
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
      </CardContent>
    </Card>
  );
}

KlipLogin.propTypes = {
  open: PropTypes.bool.isRequired
};
