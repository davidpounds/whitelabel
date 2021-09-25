import './App.css';
import data from './data/whiteLabelData.json';
import WhiteLabelAdmin from './components/WhiteLabelAdmin';

function App() {
  return (
    <div className="app">
      <WhiteLabelAdmin data={data} />
    </div>
  );
}

export default App;
