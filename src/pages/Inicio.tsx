import { Title } from '../components/Title';
import { useEffect } from 'react'

export const Inicio = () => {

  useEffect(() => {
    fetch('https:jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((json) => console.log(json));
    
  });
  return (
    <>
      <Title titulo="Bienvenido!" />
    </>
  );
};
