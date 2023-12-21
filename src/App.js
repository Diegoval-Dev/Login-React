import './App.css';
import {useState} from 'react';

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = ({target: {value}}) => setEmail(value);

  const handlePasswordChange = ({target: {value}}) => setPassword(value);

  const handelFormSubmit = (event) => {
    event.preventDefault();
    alert(`Email: ${email} Password: ${password}`);
  }

  return (
    <div className="App">
      <form onSubmit={handelFormSubmit}>
        <h2>Iniciar sesión</h2>
          <label>
          Correo
            <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
          </label>
          <label>Correo
            <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
          </label>
          <button type='submit'>Iniciar sesión</button>
      </form>
    </div>
  );
}

export default App;
