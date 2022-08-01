import React,{useEffect} from 'react';
import { Box, Button } from '@mui/material';
import LoginButton from '../component/LoginButton';
import { useRecoilState } from 'recoil';
import {userState} from '../recoil/user';

export default function Main() {
  const [user, setUser] = useRecoilState(userState);
  console.log(user);
//   useEffect(() => {
//     if (user.isLogin) {
//         try {
            
//             console.log(user);
//         } catch (err) {
//             console.log("ㅇㅡㅁ?");
//         }
//     }
// }, [user]);
 return (
  <Box>
    {user ? (
      <Box sx={{ display : 'flex',flexDirection: 'column', justifyContent: 'center'}}>
      <Box sx={{display : 'flex', justifyContent: 'center', my:'5%' }}>로그인 후 메인화면</Box>
      <Box sx={{display : 'flex', justifyContent: 'center' }}> 
        <Box sx={{ display : 'flex', justifyContent: 'center', border: 1, width: '75%', padding: '5%' }}>
          <Box>Main net Address: {user.address}</Box>
          <Box>Test net Address: {user.testAddress}</Box>
        </Box>
      </Box>
      <Box sx={{display : 'flex', justifyContent: 'center',mt: '5%'}}>
        <Button variant="contained">LogOut</Button>
      </Box>
    </Box>
    ) : (
      <Box sx={{ display : 'flex',flexDirection: 'column', justifyContent: 'center'}}>
      <Box sx={{display : 'flex', justifyContent: 'center', my:'5%' }}>메인 화면</Box>
      <Box sx={{display : 'flex', justifyContent: 'center' }}> 
        <Box sx={{ display : 'flex', justifyContent: 'center', border: 1, width: '75%', padding: '5%' }}>
          <Box>이 곳은 유저 정보 창</Box>
        </Box>
      </Box>
      <Box sx={{display : 'flex', justifyContent: 'center',mt: '5%'}}>
        <LoginButton />
      </Box>
    </Box>
    )}
  </Box>
 )
};