import './App.css';
import stars from './assets/stars.jpg'
import island from './assets/island.png'

function App() {
  return (
    <section>
      <div className="waves">
        <img src={stars} alt='' className='stars'></img>
        <h2>
          Would you move here?     
        </h2>
        <img src={island} alt='' className='island'></img>
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
    </section>
  );
}

export default App;
