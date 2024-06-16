import React from 'react';
import { Stack , Grid , Paper, Typography , Box , Button , List , ListItem , ListItemButton , ListItemText } from '@mui/material';
import { grey , blue } from '@mui/material/colors';
import InformationElement from '../Components/InformationElement';

const userImg = "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"

export default function UserProfile () {
  return (
    <div>
        <div style={{'height': '80px'}}>
            User Profile
        </div>
        <Grid container sx={{backgroundColor: grey['100'], height: 'calc(100vh - 80px)', pt: 4}}>
            <Grid item xs={3} sx={{mr: 4, ml: 4}}>
                <div style={{'margin-bottom': '20px'}}>
                    <Paper>
                        <Stack direction="column">
                            <img src={userImg}/>
                            <div>
                                <Typography variant='h5' color='primary' sx={{mt: 2, mb: 1, fontWeight: 600, ml: 2}}>
                                    John Doe
                                </Typography>
                            </div>
                            <div>
                                <Typography variant='body1' color='primary' sx={{ml: 2, mb: 1}}>
                                    UserName: johndoe123
                                </Typography>
                            </div>
                            <div>
                                <Typography variant='body1' color='primary' sx={{ml: 2, mb: 2}}>
                                    Profile: Private
                                </Typography>
                            </div>
                        </Stack>
                    </Paper>
                </div>

                <div style={{'margin-bottom': '20px'}}>
                    <Paper>
                        <List sx={{backgroundColor: 'white'}}>
                            <ListItem>
                                <ListItemButton sx={{backgroundColor: blue['800'], color: 'white', borderRadius: '5px', '&:hover': {backgroundColor: blue['500']}}}>
                                    <ListItemText primary="Profile" />
                                </ListItemButton>
                            </ListItem>

                            <ListItem>
                                <ListItemButton sx={{borderRadius: '5px', '&:hover': {backgroundColor: blue['200']}}} disabled={false}>
                                    <ListItemText primary="Edit Profile" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Paper>
                </div>

                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 6
                }}>
                    <Button variant='contained' color='primary' sx={{alignSelf: 'center'}}>
                        Become his Buddy!!!
                    </Button>
                </Box>

            </Grid>

            <Grid item xs={8}>
                <Paper sx={{pt: 2, pl: 5, pr: 5, pb: 4}}>
                    <Stack direction='column'>
                        <div style={{'margin-bottom': '13px'}}>
                            <Typography variant='h5' sx={{color: grey['600'], fontWeight: 600}}>
                                Basic Profile
                            </Typography>
                        </div>

                        <div style={{'margin-bottom': '20px'}}>
                            <Typography variant='body2' sx={{color: grey['600']}}>
                                The information can be edited in the Edit Profile section
                            </Typography>
                        </div>
                        
                        <div style={{'color': grey['800'], 'margin-left': '-40px', 'margin-right': '-40px', 'height': '1px', 'background-color': grey['700']}}>
                        </div>

                        <Grid container sx={{mt: 2}} rowSpacing={2} columnSpacing={2}>
                            <Grid item xs={6}>
                                <div>
                                    <InformationElement field='FIRST NAME' value='Vishal'/>
                                </div>
                            </Grid>

                            <Grid item xs={6}>
                                <div>
                                    <InformationElement field='LAST NAME' value='Vishwanathan'/>
                                </div>
                            </Grid>

                            <Grid item xs={6}>
                                <div>
                                    <InformationElement field='EMAIL ADDRESS' value='vishalvishwanathan@gmail.com'/>
                                </div>
                            </Grid>

                            <Grid item xs={6}>
                                <div>
                                    <InformationElement field='PHONE NUMBER' value='+918355647219'/>
                                </div>
                            </Grid>

                            <Grid item xs={6}>
                                <div>
                                    <InformationElement field='COUNTRY' value='INDIA'/>
                                </div>
                            </Grid>

                            <Grid item xs={6}>
                                <div>
                                    <InformationElement field='CITY' value='Coimbatore'/>
                                </div>
                            </Grid>
                        </Grid>
                    </Stack>
                </Paper>
            </Grid>
        </Grid>
    </div>
  )
}
