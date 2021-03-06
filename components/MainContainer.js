import Link from 'next/link';
import Head from 'next/head';

import A from '../components/A';

const MainContainer = ({children, keywords}) => {
  return (
    <>
      <Head>
        <meta keywords={"nextjs" + keywords}></meta>
        <title>Main page</title>
      </Head>      <div className="navbar">
        <A href={'/'} text='Главная страница' />
        <A href={'/users'} text="Пользователи" />
      </div>
      <div>
        {children}
      </div>
      <style jsx>
        {
          `.navbar {
            background: orange;
            padding: 15px;
          }`
        }
      </style>
    </>
  )
}

export default MainContainer;