import React, {useState} from 'react';
import { Box, Button } from '@mui/material';



export default function Main() {
 const [isLogin, setIsLogin] = useState(false);

 return (
  <Box>
    {isLogin ? (
      <Box sx={{ display : 'flex',flexDirection: 'column', justifyContent: 'center'}}>
      <Box sx={{display : 'flex', justifyContent: 'center', my:'5%' }}>메인 화면</Box>
      <Box sx={{display : 'flex', justifyContent: 'center' }}> 
        <Box sx={{ display : 'flex', justifyContent: 'center', border: 1, width: '75%', padding: '5%' }}>
          <Box>dma?</Box>
        </Box>
      </Box>
      <Box sx={{display : 'flex', justifyContent: 'center',mt: '5%'}}>
        <Button variant="contained">Login</Button>
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
        <Button variant="contained">Login</Button>
      </Box>
    </Box>
    )}
  </Box>
 )
};