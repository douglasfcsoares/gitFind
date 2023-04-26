import { Header } from "../../components/header/index.js"
import background from "../../assets/octocat.png"
import './styles.css'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <img src={background} className="background" alt="background app" />
        <div className="info">
          <p>Informações</p>
          <div>
            <input name="user" placeholder="@username" />
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
