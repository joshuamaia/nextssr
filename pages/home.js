import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

import withAnalytics from '../src/hocs/withAnalytics';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 500,
    marginTop: 10
  },
  media: {
    height: 420,
    paddingTop: '56.25%' // 16:9
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

function Home() {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <CssBaseline />
      <Container maxWidth="sm">
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                J
              </Avatar>
            }
            title="Joshua Maia Rodrigues"
            subheader="23 de Setembro de 2019"
          />
          <CardMedia
            className={classes.media}
            image="/static/joshua.jpeg"
            title="Avatar"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Analista de Sistemas em busca de novas oportunidades.
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

export default withAnalytics()(Home);
