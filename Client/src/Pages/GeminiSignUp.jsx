import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Link,
  Paper
} from '@mui/material';
import { createTheme , ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { spacing } from '@mui/system';
import { Lock } from '@mui/icons-material';

const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  signupForm: {
    marginTop: spacing(8), // Increased spacing for elegance
    marginBottom: spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme => theme.palette.background.paper, // Use theme background
    borderRadius: theme => theme.shape.borderRadius, // Apply theme's border radius
    boxShadow: theme => theme.shadows[2], // Subtle shadow for depth
    padding: spacing(4),
  },
  title: {
    marginBottom: spacing(3),
    color: theme => theme.palette.primary.main, // Use primary color for title
    fontWeight: 500, // Add weight for emphasis
  },
  textField: {
    marginBottom: spacing(2),
  },
  submitButton: {
    marginTop: spacing(3),
    width: '100%',
    backgroundColor: theme => theme.palette.primary.main, // Use primary color
    color: theme => theme.palette.getContrastText(theme.palette.primary.main), // Contrasting text color
    '&:hover': {
      backgroundColor: theme => theme.palette.primary.dark,
    },
  },
  link: {
    color: theme => theme.palette.text.secondary, // Use secondary text color
    textDecoration: 'none',
    fontWeight: 300, // Lighter weight for link
    '&:hover': {
      color: theme => theme.palette.text.primary,
    },
  },
  formControlLabel: {
    marginTop: spacing(2), // Add spacing for checkbox
  },
}));

const SignupForm = () => {
  const classes = useStyles(theme); // Get styles from useStyles
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Implement form submission logic here
    // (e.g., validation, sending data to server)

    console.log('Form submitted:', formData); // For development purposes
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="sm" className={classes.signupForm} sx={{pt: 4, pr: 8, pb: 4, pl: 8}}>
          <Lock color="primary" sx={{fontSize: '48px', mb: 2}}/>
          <Typography component="h1" variant="h5" align="center" className={classes.title} sx={{mb: 4}}>
            Sign Up
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={formData.firstName}
                  onChange={handleChange}
                  className={classes.textField}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="lastName"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={classes.textField}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={classes.textField}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleChange}
                  className={classes.textField}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="confirmPassword"
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={classes.textField}
                />
              </Grid>
              <Grid item xs={12} className={classes.formControlLabel}>
                <FormControlLabel
                  control={<Checkbox checked={formData.termsAccepted} onChange={handleChange} name="termsAccepted" />}
                  label="I agree to the Terms & Conditions"
                />
              </Grid>
              <Grid item xs={12} sx={{mb: 2}}>
                <Button type="submit" fullWidth variant="contained" className={classes.submitButton}>
                  Sign Up
                </Button>
              </Grid>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2" className={classes.link}>
                    Already have an account? Sign In
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </form>
          </Container>
        </ThemeProvider>
    </div>
  );
};

export default SignupForm;