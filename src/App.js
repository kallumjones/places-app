
import './App.css';

function App() {
  const { version } = window['appConfig'] || 'demo';

  return (
    <div className="App">
      Places App

      <h3>version: {version}</h3>
    </div>
  );
}

export default App;
