import Header from './component/Header';
import './App.css';
import Footer from './component/Footer';
import Main from './component/Main';

function App() {
  return (
    <div className="App">
      <div className='TitleSection'>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}
 
export default App;
