import Header from './components/Header/Header';
import NewsBanner from './components/NewsBanner/NewsBanner';
import Main from './pages/Main/Main';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Main />
      </div>
    </>
  );
}

export default App;
