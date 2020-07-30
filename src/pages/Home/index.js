import React from 'react';
import styled from 'styled-components';
import Menu from '../../components/Menu'
import dadosIniciais from '../../data/dados_iniciais.json';
import BarnnerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

const AppWrapper = styled.div`
  background: var(--grayDark);

  body {
  --bodyPaddingTop: 94px;
  padding-top: var(--bodyPaddingTop);
}

  @media( max-width: 800px) {
    padding-top: 40px;
  }
  `;

function Home() {
  return (
    <AppWrapper>
      <Menu />
      <BarnnerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores: Mas o que eles fazem afinal? Descubra com a Vanessa"}
      />

      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel 
        category={dadosIniciais.categorias[1]} 
      />

      <Carousel 
        category={dadosIniciais.categorias[2]} 
      />

      <Carousel 
        category={dadosIniciais.categorias[3]} 
      />

      <Carousel 
        category={dadosIniciais.categorias[4]} 
      />

      <Carousel 
        category={dadosIniciais.categorias[5]} 
      />
      
      <Footer />
    </AppWrapper>
  );
}

export default Home;
