import {useRouter} from 'next/router';
import MainContainer from '../../components/MainContainer';

import styles from '../../styles/User.module.scss';

export default function User({user}) {
  const {query} = useRouter();

  return (
    <MainContainer keywords={`${user.name} page`}>
    <div className={styles.user}>
      <h1>
        Пользователь c id {query.id}
        <div>Имя пользователя - {user.name}</div>
      </h1>
    </div>
    </MainContainer>
  )
}

export async function getServerSideProps({params}) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = await response.json();
  return {
    props: {user}, // will be passed to the page component as props
  }
}