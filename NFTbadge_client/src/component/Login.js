import React, { useState } from "react";
import { Box, TextField, Fade, FormControl, InputLabel, Select, MenuItem} from "@mui/material";
import { postUser } from "../API/Login";

export default function Login() {
  const [isManyUser, setIsManyUser] = useState(false);
  const [twoOrMoreUser, setTwoOrMoreUser] = useState(null);
  const [selectUserEmail, setSelectUserEmail] = useState('');

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

  const handleSelect = (e) => {
    setSelectUserEmail(e.target.value);
  }

  // console.log('요기는 잘 들어오?', twoOrMoreUser);
  return (
    <Box>
      <TextField id="standard-basic" label="수강생의 이름을 적어주세요" variant="standard" onChange={handleOnChange}
        sx={{mb : '10%'}}
      />
      {twoOrMoreUser ? 
        <Fade in={isManyUser} timeout={2000}>
          <FormControl fullWidth variant="filled" >
            <InputLabel>이메일을 확인해주세요.</InputLabel>
            <Select value={selectUserEmail} label="email" onChange={handleSelect}>
              {twoOrMoreUser.map((el) => (
                <MenuItem value={el} key={el}>{el}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Fade> 
        :
        null
      }
    </Box>
  );
}
