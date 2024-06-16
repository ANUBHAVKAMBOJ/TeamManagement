import React from 'react';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import SignupForm from './Pages/GeminiSignUp';
import MySignIn from './Pages/MySignIn';
import UserProfile1 from './Pages/GeminiProfile';
import GPTProfile from './Pages/GPTProfile';
import UserProfile from './Pages/UserProfile';
import { Grid } from '@mui/material';

function App() {
  return (
    <div>
      <Grid container columns={24}>
        <Grid item xs={5} sx={{backgroundColor: 'greenyellow', height: '100vh'}}>
          Nav
        </Grid>
        <Grid item xs={19}>
          <UserProfile />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
