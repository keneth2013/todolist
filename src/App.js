import './App.css';
import BrandHeader from './components/BrandHeader/BrandHeader';
import Login from './components/Login/Login';

function App() {
  return (
      
    <section>
      <BrandHeader></BrandHeader>
      <div className = "flex m-60">
        <Login></Login>
      </div>
      
    </section>
  );
}

export default App;
