import { Header } from "../../components/header/index.js";
import ItemList, {} from "../../components/itemList/index.jsx";
import background from "../../assets/octocat.png";
import './styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <img src={background} className="background" alt="background app" />
        <div className="info">
          <div>
            <input name="user" placeholder="@username" />
            <button>Search</button>
          </div>
          <div className="perfil">
            <img src="https://avatars.githubusercontent.com/u/62715161?s=400&u=7351297a7a413114cc424c3bba2a3407a084dae9&v=4" className="profile" alt="Imagem do perfil do Dev" />
            <div>
              <h3>
                Douglas Soares
              </h3>
              <span>@douglasfcsoares</span>
              <p>Descrição do perfil</p>
            </div>
          </div>
          <hr />
          <div className="repository">
            <h4>Repositórios</h4>
            <ItemList title='Teste1' description='teste de descrição 01' />
            <ItemList title='Teste2' description='teste de descrição 02' />
            <ItemList title='Teste3' description='teste de descrição 03' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
