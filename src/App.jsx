import './App.css';
import whiteLabelData from './data/whiteLabelData.json';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadStore } from './actions';
import WhiteLabelAdmin from './components/WhiteLabelAdmin';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadStore(whiteLabelData));
  }, [dispatch]);

  return (
    <div className="app">
      <WhiteLabelAdmin />
    </div>
  );
};

export default App;
