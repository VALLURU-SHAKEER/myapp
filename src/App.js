import './App.css';

function App() {
  return (
    <div className="App">
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