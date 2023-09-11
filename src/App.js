import './App.css';
import Rate from './components/Rate';
import './components/Rate.css';

const rateList = [
  {
    name: "Безлимитный 300",
    url: "/assets/300.JPG",
    speed: "до 10 Мбит/сек",
    traffic: "Объём включённого трафика не ограничен",
  },

  { 
    name: "Безлимитный 450",
    url: "/assets/450.JPG",
    speed: "до 50 Мбит/сек",
    traffic: "Объём включённого трафика не ограничен",
  },

  {
    name: "Безлимитный 550",
    url: "/assets/550.JPG",
    speed: "до 100 Мбит/сек",
    traffic: "Объём включённого трафика не ограничен",
    isSelected: true,
  },

  {
    name: "Безлимитный 1000",
    url: "/assets/1000.JPG",
    speed: "до 200 Мбит/сек",
    traffic: "Объём включённого трафика не ограничен",
  },

]

function App() {
  return (
    <div className="App">
      <div className="container">
   {
    rateList.map((rate) =>
    <Rate 
    name={rate.name} url={rate.url} speed={rate.speed} traffic={rate.traffic} isSelected={rate.isSelected} />
    ) 
  }
  </div>
    </div>
  );
}

export default App;
