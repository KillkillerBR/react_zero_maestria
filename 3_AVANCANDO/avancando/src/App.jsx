import { useState } from 'react'

//styles CSS
import './App.css'

// components
import SadDoge from './assets/sad doge.png'
import ConditionalRender from './components/ConditionalRender'
import ListRender from './components/ListRender'
import ManageData from './components/ManageData'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Fragment from './components/Fragment'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'
import UserDetails from './components/UserDetails'

function App() {

  //const name = 'joaquim'
  const [userName] = useState('maria')

  const cars = [
    {id: 1, brand: "ferrari", color: "amarelo", newCar: true, km: 0},
    {id: 2, brand: "KIA", color: "branco", newCar: false, km: 34343},
    {id: 3, brand: "renault", color: "azul", newCar: false, km: 2340},
  ]

  const showMessage = () => {
      console.log("evento do componente pai!")
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  const pessoas = [
    {id: 1, nome: 'Claudio', idade:'37', profissao:'entregador',},
    {id: 2, nome: 'Enzo', idade:'14', profissao:'estudante',},
    {id: 3, nome: 'Roberta', idade:'17', profissao:'estagiaria',},
    {id: 4, nome: 'Bernardo', idade:'25', profissao:'contador',},
  ]

  return (
    <div>
      <h1>Avançando react</h1>
      {/* imagem em public */}
      <div>
        <img src='/doge.png' alt='cach1' height={500} />
      </div>
      {/*imagem em assets */}
      <div>
        <img src={SadDoge} alt="sadCach1" />
      </div>
      <div>
        <ManageData />
        <ListRender />
        <ConditionalRender />
        {/*props */}
        <ShowUserName name={userName} />
        {/*destructuring*/}
        <CarDetails brand = "fiat" km = {39000} color = "branco" newCar = {false} />
        {/* reaproveitando */}
        <CarDetails brand ="ford" color =" vermelha" km = {0} newCar = {true} />
        <CarDetails brand = "VW" color = "azul" km = {100000} newCar = {false} />
        {/* loop em array de objetos */}
        {cars.map((car) => (
          <CarDetails 
          key={car.id}
          brand={car.brand} 
          color={car.color} 
          km={car.km} 
          newCar={car.newCar} 
          />
        ))}
        {/* fragment */}
        <Fragment propFragment = "teste" />
        {/* children */}
        <Container myValue = "testing">
          <p>este é o conteudo</p> //este é a children do componente
        </Container>
      </div>
      {/* executar função */}
      <ExecuteFunction myFunction={showMessage} />
        {/* stateLift */}
        <Message msg={message}/>
        <ChangeMessageState handleMessage={handleMessage} />
        {/* desafio 4 */}
        <UserDetails pessoas={pessoas} />
    </div>
  )
}

export default App
