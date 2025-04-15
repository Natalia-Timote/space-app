import styled from 'styled-components';
import EstilosGlobais from './components/EstilosGlobais';
import Cabecalho from './components/Cabecalho';
import BarraLateral from './components/BarraLateral';
import Banner from './components/Banner';
import TituloBanner from './components/TituloEstilizado';

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;

  div {
    display: flex;
  }
`;

function App() {
  return (
    <FundoGradiente>
      <EstilosGlobais />
      <Cabecalho />
      <div>
        <BarraLateral />
        <Banner />
      </div>
    </FundoGradiente>

  )
}

export default App
