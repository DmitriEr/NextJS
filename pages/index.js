import Link from 'next/link';
import Head from 'next/head';

import A from '../components/A';
import MainContainer from '../components/MainContainer';

const Index = () => {
  return (
    <MainContainer keywords={'main page'}>
      <h1>Главная страница</h1>
      <style jsx>
        {`
          .navbar {
            background: orange;
            padding: 15px
          }
        `}
      </style>
    </MainContainer>
  )
}

export default Index;