import React, {useState} from 'react';
import { Box, Button } from '@mui/material';
import LoginButton from '../component/LoginButton';


export default function Main() {
 const [isUser, setIsUser] = useState({
  isLogin: false,
  mainAddress: '',
  testAddress: ''
 });

 const getUser = (address) => {
  setIsUser({
    isLogin: true,
    mainAddress: address,
    testAddress: ''
  })
 }

 return (
  <Box>
    {isUser.isLogin ? (
      <Box sx={{ display : 'flex',flexDirection: 'column', justifyContent: 'center'}}>
      <Box sx={{display : 'flex', justifyContent: 'center', my:'5%' }}>로그인 후 메인화면</Box>
      <Box sx={{display : 'flex', justifyContent: 'center' }}> 
        <Box sx={{ display : 'flex', justifyContent: 'center', border: 1, width: '75%', padding: '5%' }}>
          <Box>Main net Address: {isUser.mainAddress}</Box>
          <Box>Test net Address: {isUser.testAddress}</Box>
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
        <LoginButton user={getUser}/>
      </Box>
    </Box>
    )}
  </Box>
 )
};