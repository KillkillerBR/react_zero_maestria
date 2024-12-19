import './App.css'
import Car from './components/Car.jsx'

function App() {

  const myCars = [
    { name: "fiesta", km: 33000, color: "branco" },
    { name: "onyx", km: 168, color: "vermelho" },
    { name: "creta", km: 31000, color: "prata" },
  ];

  return (
    <div>
      <h1>showroom de carros</h1>
      <div className='car-container'>
        {myCars.map((car) => (
          <Car car = {car}/>
        ))}
      </div>
    </div>
  )
}

export default App
