import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <h1>Hello Word</h1>
    <br />
    <Link href="/users">
      <a>Usuários</a>
    </Link>
  </div>
);

export default Home;
