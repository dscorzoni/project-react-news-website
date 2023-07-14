import './App.css';
import Articles from './Articles';
import Header from './Header';
import Hero from './Hero';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Articles />
      </main>
    </div>
  );
}

export default App;
