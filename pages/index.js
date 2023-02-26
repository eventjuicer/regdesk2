import * as React from 'react';
import Typography from '@mui/material/Typography';
import {Container, Grid, Box} from '@mui/material';
import Link from '../src/Link';
import Iframe from '@/src/Iframe';

export default function Index() {
 
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>

        <Typography variant="h4" component="h1" gutterBottom>
          Material UI - Next.js example
        </Typography>

        <Iframe src="jkja asdaslkd lak lk "><h1>asdasd</h1></Iframe>

        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
 
      </Box>
    </Container>
  );
}



