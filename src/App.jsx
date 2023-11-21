import './App.css';
import Profile from './Profile';
import Service from './Service';

function App() {
  const name = "Hana A Syarif";
  return (
    <>
      <h1>Hi! Welcome to my first Vite + React Project</h1>
      <p>I'm a Web Developer Student at Purwadhika</p>
      <div style={{ backgroundColor: "grey", borderRadius: "10px", padding: "10px" }}>{name.toUpperCase()}</div>
      <Service />
      <Profile email="hana@gmail.com" />
    </>
  );
}

export default App;
