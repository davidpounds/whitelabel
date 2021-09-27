import './App.css';
import whiteLabelData from './data/whiteLabelData.json';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadStore } from './actions';
import { getWhiteLabelComputedCss } from './selectors';
import WhiteLabelAdmin from './components/WhiteLabelAdmin';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadStore(whiteLabelData));
  }, [dispatch]);

  const style = useSelector(getWhiteLabelComputedCss);
  useEffect(() => {
    const styles = document.getElementById('previewstyles');
    if (styles) {
      styles.innerHTML = style;
    }
  }, [style]);

  return (
    <div className="app">
      <WhiteLabelAdmin />
    </div>
  );
};

export default App;
