import './styles/App.css'
import Input from './components/Input';

function App() {
  
  const handleOnInputChange = (inputData) => {
    console.log(inputData)
  }

  return (
    <div className='App'>
      <div className='container'>
        <Input onInputChange={handleOnInputChange}/>
      </div>
      
    </div>
  );
}

export default App;
