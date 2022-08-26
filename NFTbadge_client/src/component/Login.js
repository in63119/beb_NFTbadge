import React, { useState, useEffect } from "react";
import { Box, TextField, Fade, Radio, FormControl, RadioGroup, FormControlLabel } from "@mui/material";
import { postUser } from "../API/Login";

export default function Login() {
  const [isManyUser, setIsManyUser] = useState(false);
  const [twoOrMoreUser, setTwoOrMoreUser] = useState(null);

  const handleOnChange = async (e) => {
    if (e.length === 0) {
      setIsManyUser(false);
    } else {
      let someUser = await postUser(e.target.value);
      if (someUser) {
        setIsManyUser(true);
        setTwoOrMoreUser(someUser);
      }
    }
  }

  const handleTwoOrMoreUser = () => {
    console.log('잘 되었나 볼까?')
  }

  useEffect(() => {
    if (isManyUser) {
      handleTwoOrMoreUser();
    } 
  });
  // console.log(twoOrMoreUser, isManyUser);
  return (
    <Box>
      <TextField id="standard-basic" label="수강생의 이름을 적어주세요" variant="standard" onChange={handleOnChange}/>
      <Fade in={isManyUser} timeout={2000}>
        <FormControl>
          <RadioGroup>
            {twoOrMoreUser.map(i => {
              <FormControlLabel value={i} control={<Radio />} label="df"/>
            })}
          </RadioGroup>
        </FormControl>
      </Fade>
    </Box>
  );
}
