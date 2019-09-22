import React from 'react';
import Link from 'next/link';

const Home = () => (
  <div>
    <h1>Hello Word</h1>
    <br />
    <Link href="/users">
      <a>Usuários</a>
    </Link>
  </div>
);

export default Home;
