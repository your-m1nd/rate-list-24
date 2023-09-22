import './App.css';
import Rate from './components/Rate';
import './components/Rate.css';
import { useState } from 'react';

function App() {

  const rateList = [
    {
      id: 1,
      name: "Безлимитный 300",
      url: "/assets/300.JPG",
      speed: "до 10 Мбит/сек",
      traffic: "Объём включённого трафика не ограничен",
    },
  
    { 
      id: 2,
      name: "Безлимитный 450",
      url: "/assets/450.JPG",
      speed: "до 50 Мбит/сек",
      traffic: "Объём включённого трафика не ограничен",
    },
  
    {
      id: 3,
      name: "Безлимитный 550",
      url: "/assets/550.JPG",
      speed: "до 100 Мбит/сек",
      traffic: "Объём включённого трафика не ограничен",
    },
  
    {
      id: 4,
      name: "Безлимитный 1000",
      url: "/assets/1000.JPG",
      speed: "до 200 Мбит/сек",
      traffic: "Объём включённого трафика не ограничен",
    },
  
  ];

  const [selectedId, setSelectedId] = useState(null);
  const [isSelected, setSelected] = useState(null);
  const onClick = (id) => {
    setSelectedId(id);
    setSelected(id);
  }

  return (
    <div className="App">
      <div className="container">
   {
    rateList.map((rate) =>
    <Rate key={rate.id} id={rate.id} name={rate.name} url={rate.url} speed={rate.speed} traffic={rate.traffic} onClick={onClick} selectedId={selectedId} isSelected={isSelected}/>
    ) 
  }
  </div>
    </div>
  );
}

export default App;
