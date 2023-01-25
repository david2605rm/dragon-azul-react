import './App.css';

function App() {
  const user = "david"
  return (
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Colaboraciones</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Precios</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Catalogo
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Visual</a></li>
                  <li><a className="dropdown-item" href="#">Partes</a></li>
                  <li><a className="dropdown-item" href="#">Completos</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}

export default App;
