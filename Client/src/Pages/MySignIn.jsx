import React from 'react'
import { Paper , Container, Stack , TextField , Typography, Button , Checkbox , Link , Grid , Box } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { grey } from '@mui/material/colors';

export default function () {
  return (
    <div style={{'margin-top': '100px'}}>
        <Container maxWidth='sm'>
            <Paper>
                <Stack direction='column'>
                    <AccountCircle color='primary' sx={{ fontSize: '48px' , alignSelf: 'center', mb: 2, mt: 4 }} />

                    <Typography variant='h5' align='center' color='primary' sx={{mb: 4}}>
                        Sign In
                    </Typography>

                    <Box sx={{pl: 12, pr: 12}}>
                        <TextField variant='outlined' required fullWidth id='username' label='User Name' name='email' autoFocus sx={{mb: 2}}/>

                        <TextField variant='outlined' id='password' label='Password' name='password' fullWidth required autoFocus sx={{mb: 2}}/>

                        <Button type='submit' variant='contained' color='primary' fullWidth sx={{mb: 2}}>
                            Sign In
                        </Button>

                        <Grid container sx={{alignItems: 'center', mr: 2, mb: 8}}>
                            <Grid item xs={6}>
                                <Stack direction='row' sx={{alignItems: 'center'}}>
                                    <Checkbox color='primary' sx={{mr: '3px'}}/>
                                    <Typography variant='body2'>
                                        Remember me
                                    </Typography>
                                </Stack>
                            </Grid>

                            <Grid item xs={6} sx={{textAlign: 'right'}}>
                                <Link href='#' variant='body2' underline='hover' sx={{pr: 2}}>
                                    Forgot Password?
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>

                    <Grid container direction='row' sx={{backgroundColor: grey['300'], height: '65px'}}>
                        <Grid item xs={6} sx={{textAlign: 'right', alignSelf: 'center', mr: '5px'}}>
                            <Typography variant='body2'>
                                Not a Member?
                            </Typography>
                        </Grid>

                        <Grid item xs={5} sx={{alignSelf: 'center'}}>
                            <Link href='#' variant='body2' underline='hover'>
                                Create Account
                            </Link>
                        </Grid>
                    </Grid>
                </Stack>
            </Paper>
        </Container>
    </div>
  )
}
