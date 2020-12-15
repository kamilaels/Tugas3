import logo from './logo.svg';
import './App.css';
import Main from './main';
import { Link } from 'react-router-dom';

class App extends React.Component {
render(){
  return (
    <div> <hr />
        <Link to="/pegawai" className="nav-link">Daftar Pegawai</Link>
        <p>Main /></p>
    </div>
  );
 }
}

export default App;
