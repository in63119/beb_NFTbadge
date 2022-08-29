import React, { useState } from "react";
import { Box, TextField, Fade, FormControl, InputLabel, Select, MenuItem} from "@mui/material";
import { postUser } from "../API/Login";
// import { getNFT } from "../API/NFT";
import KlipLogin from "./KlipLogin";
import { useRecoilState } from "recoil";
import { userState } from "../recoil/user";

export default function Login() {
  const [isManyUser, setIsManyUser] = useState(false);
  const [isSelectUserEmail, setIsSelectUserEmail] = useState(false);
  const [twoOrMoreUser, setTwoOrMoreUser] = useState(null);
  const [selectUserEmail, setSelectUserEmail] = useState('');
  const [user, setUser] = useRecoilState(userState);

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
    setIsSelectUserEmail(true);
  }

  const handleGetNFT = () => {
    console.log('NFT 함수실행', selectUserEmail);
    
  }

  // 유즈이펙트에 isManyUser로 true, false 값으로 함수하나 만들어서 실행시키자.


  // console.log('요기는 잘 들어오?', twoOrMoreUser);
  return (
    <Box>
      <TextField id="standard-basic" label="수강생의 이름을 적어주세요" variant="standard" onChange={handleOnChange}
        sx={{mb : '10%'}}
      />
      {twoOrMoreUser ? 
        <Fade in={isManyUser} timeout={1500}>
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
      {isSelectUserEmail ? 
        <Fade in={isSelectUserEmail} timeout={1500}>
          <Box sx={{ mt: '10%'}}>
            <KlipLogin  open={isSelectUserEmail} email={selectUserEmail}/>
          </Box>
        </Fade>
      :
        null
      }
    </Box>
  );
}
