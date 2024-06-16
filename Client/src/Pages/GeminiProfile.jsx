import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Avatar,
  IconButton,
  TextField,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Link
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { createTheme , ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { spacing } from '@mui/system';
// import { getUserProfile } from './api'; // Replace with your API call

const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > .MuiCard-root': {
      flex: 1,
      margin: spacing(2),
    },
  },
  profileCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: spacing(4),
  },
  avatar: {
    width: spacing(10),
    height: spacing(10),
    marginBottom: spacing(2),
  },
  editButton: {
    position: 'absolute',
    bottom: spacing(1),
    right: spacing(1),
  },
  userInfo: {
    marginBottom: spacing(2),
  },
  backgroundImage: {
    width: '100%',
    height: '200px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    marginBottom: spacing(2),
  },
  contactList: {
    '& > .MuiListItem-root': {
      padding: spacing(1.5),
    },
  },
}));

const UserProfile1 = () => {
  const classes = useStyles();
//   const [userData, setUserData] = useState({});

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       const user = await getUserProfile(); // Replace with your API call response
//       setUserData(user);
//     };
//     fetchUserProfile();
//   }, []);

    const userData = {
    name: 'John Doe',
    username: 'johndoe',
    avatarUrl: 'https://via.placeholder.com/150',
    backgroundImage: 'https://via.placeholder.com/500',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    contactInfo: {
        email: 'john@mail.com',
        phone: '+1234567890',
        location: 'New York, USA'
    }
    };

  const handleEditProfile = () => {
    // Handle edit profile functionality (e.g., navigate to edit page)
    console.log('Edit Profile clicked');
  };

  return (
    <div>
        <ThemeProvider theme={theme}>
        <Container maxWidth="lg" className={classes.root}>
      <Card className={classes.profileCard}>
        {userData.backgroundImage && (
          <CardMedia
            className={classes.backgroundImage}
            image={userData.backgroundImage}
            title="Profile Background"
          />
        )}
        <Avatar alt={userData.name} src={userData.avatarUrl} className={classes.avatar} />
        <IconButton aria-label="edit" className={classes.editButton} onClick={handleEditProfile}>
          <EditIcon />
        </IconButton>
        <Typography variant="h5" className={classes.userInfo}>
          {userData.name}
        </Typography>
        <Typography variant="body1" className={classes.userInfo}>
          {userData.username}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {userData.bio}
        </Typography>
        {userData.contactInfo && (
          <List className={classes.contactList}>
            {Object.entries(userData.contactInfo).map(([key, value]) => (
              <ListItem key={key}>
                <ListItemIcon>
                  {/* Add appropriate icon based on contact type */}
                </ListItemIcon>
                <ListItemText primary={value} />
              </ListItem>
            ))}
          </List>
        )}
        <Button variant="contained" color="primary" to="/edit-profile" component={Link}>
          Edit Profile
        </Button>
      </Card>
      {/* Additional sections for user activity, connections, etc. can be added here */}
    </Container>
        </ThemeProvider>
    </div>
  );
};

export default UserProfile1;
