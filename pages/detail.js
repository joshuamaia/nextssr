import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import axios from 'axios';

import withAnalytics from '~/hocs/withAnalytics';

function Detail({ user }) {
  return (
    <>
      <Head>
        <title>Detalhe</title>
      </Head>
      <CssBaseline />
      <Container maxWidth="sm">
        <Card style={{ maxWidth: 500, marginTop: 10 }}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" style={{ backgroundColor: red[500] }}>
                J
              </Avatar>
            }
            title={user.name}
            subheader={user.company}
          />
          <CardMedia
            style={{ height: 420, paddingTop: '56.25%' }}
            image={user.avatar_url}
            title="Avatar"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {user.bio}
            </Typography>
          </CardContent>
        </Card>
        <br />
        <Link href="/users">
          <a>Usuários</a>
        </Link>
      </Container>
    </>
  );
}

Detail.getInitialProps = async ({ query }) => {
  const response = await axios.get(
    `https://api.github.com/users/${query.user}`
  );

  return { user: response.data };
};

export default withAnalytics()(Detail);
