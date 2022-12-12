import 'react';
import Header from '../../components/Header/Header';
import Herocomponent from '../../components/Hero_Section/Herocomponent';

type Props = {}

function Hero({}: Props) {
  return (
    <>
        <Header/>
        <Herocomponent/>
    </>
  )
}

export default Hero;
