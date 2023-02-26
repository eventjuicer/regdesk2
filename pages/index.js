import * as React from 'react';
import Typography from '@mui/material/Typography';
import {Container, Grid, Box} from '@mui/material';
import Link from '../src/Link';
import Iframe from '@/src/Iframe';
import NewRegistration from '@/src/NewRegistration';

export default function Index() {
 
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>

      <Typography variant="h4" component="h1" gutterBottom>
          Material UI - Next.js example
        </Typography>

        <Grid container direction="row">
          <Grid item md="8">
           <NewRegistration />
          </Grid>
          <Grid item md="4">
          <Iframe src="jkja asdaslkd lak lk "><h1>asdasd</h1></Iframe>
          </Grid>
        </Grid>


        {/* <Link href="/about" color="secondary">
          Go to the about page
        </Link>
  */}
      </Box>
    </Container>
  );
}



