import './App.css';
import Input from './conponents/Input';
import { ContextApi } from './store/ContextApi';


function App() {
  return (
    <div className="App">
    <ContextApi>
      <Input/>
    </ContextApi>
    </div>
  );
}

export default App;
