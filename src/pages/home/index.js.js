import { useState } from "react";
import { Header } from "../../components/header/index.js";
import ItemList from "../../components/itemList/index.jsx";
import background from "../../assets/octocat-mark.svg";
import "./styles.css";

function App() {
  const [user, setUser] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [repos, setRepos] = useState("");

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();

    console.log(newUser);

    if (newUser.name) {
      const { avatar_url, name, login, bio } = newUser;
      setCurrentUser({
        avatar_url,
        name,
        login,
        bio
      });

      const reposData = await fetch(
        `https://api.github.com/users/${user}/repos`
      );
      const newRepos = await reposData.json();

      console.log(newRepos);

      if (newRepos.length) {
        setRepos(newRepos);
      }
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="content">
        <img src={background} className="background" alt="background app" />
        <div className="info">
          <div>
            <input
              name="user"
              value={user}
              onChange={event => setUser(event.target.value)}
              placeholder="@username"
            />
            <button onClick={handleGetData}>Search</button>
          </div>

          {currentUser.name ? (
            <>
              <div className="perfil">
                <img
                  src={currentUser.avatar_url}
                  className="profile"
                  alt="Imagem do perfil do Dev"
                />
                <div>
                  <h3>{currentUser.name}</h3>
                  <span>@{currentUser.login}</span>
                  <p>{currentUser.bio}</p>
                </div>
              </div>
              <hr />
            </>
          ) : null}

          {repos.length ? (
            <div className="repository">
              <h4>Repositórios</h4>
              {repos.map(repo => (
                <ItemList title={repo.name} description={repo.description} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
