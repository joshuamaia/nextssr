import React from 'react';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import axios from 'axios';
import Link from 'next/link';
// import { Container } from './styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60
  }
}));

export default function User({ users }) {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Usuários</title>
      </Head>
      <CssBaseline />
      <Container maxWidth="sm">
        <div className={classes.root}>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <List component="nav" aria-label="main mailbox folders">
            {users.map(user => (
              <ListItem button alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt="Remy Sharp"
                    src={user.avatar_url}
                    className={classes.bigAvatar}
                  />
                </ListItemAvatar>
                <ListItemText primary={user.login} />
              </ListItem>
            ))}
          </List>
          <br />
          <Link href="/">
            <a>Voltar</a>
          </Link>
        </div>
      </Container>
    </>
  );
}

User.getInitialProps = async () => {
  const response = await axios.get(
    'https://api.github.com/orgs/rocketseat/members'
  );

  return { users: response.data };
};
