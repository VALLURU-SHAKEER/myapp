import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <h2>MyApp</h2>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      <h1>Welcome to MyApp</h1>
      <h1>MyApp Form</h1>

      <form>
        <input type="text" placeholder="Enter your name" />
        <br /><br />
        <input type="email" placeholder="Enter your email" />
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;