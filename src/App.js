import './App.css';
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  return (
    <div className="App">
      <h1>Hello Redux</h1>

      <Profile />
      <Login />
    </div>
  );
}

export default App;
