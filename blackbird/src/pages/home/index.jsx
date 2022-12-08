import { Link } from 'react-router-dom';

import {Button} from '../../components/Button';

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Button title ='TESTE1' />
      <Button variant='secondary' title='TESTE2' />
    <Link to="/login"> Fazer login </Link>
    </>
  )
}

export  {Home} 