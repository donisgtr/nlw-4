import { ExperienceBar } from './components/ExperienceBar';
import './styles/global.css';

function App() {
  /* isso aqui e um compomente, um compomente é uma função e só isso. que  retorna um html 
  e um compomente que cria conteudo em html, isolar forma de codigo e reaproveitar codigos */
  return (
    <div className="container">
    <ExperienceBar />
    </div>

    /* toda vez que uso {} chaves dentro do html siginifica que eu vou usar  um codigo javascript dentro do html  */
  );
}

/* propriedades e como cor de cada botão */
/* childen e toda vez que a gente passa algo dentro de um compomente, tudo que esta dentro de um compomente e um children. */

/* conceito de estado dentro do react:  */

export default App;
