import './Home.css'

// import { useContext } from 'react'

// import {CounterContext} from '../context/CounterContext'

import ChangeCounter from '../components/ChangeCounter'

// 4 - refatorando com o hook
import { useCounterContext } from '../hooks/UseCounterContext'

// 5 - context mais complexo
import { useTittleColorContext } from '../hooks/useTittleColorContext'

const Home = () => {
  //const {counter} = useContext(CounterContext)
  const { counter } = useCounterContext()

  // 5 - context mais complexo
  const { color, dispatch } = useTittleColorContext()

  // 6 - alterando state complexo
  const setTittleColor = (color) => {
    dispatch({type:color})
  }

  return (
    <div>
      <h1 style={{color: color}}>Home</h1>
      <p>Valor do contador: {counter}</p>
      {/* 3 - alterando valor do contexto */}
      <ChangeCounter />
      {/* 6 - alterando contexto complexo */}
      <div>
        <button onClick={() => setTittleColor("RED")}>vermelho</button>
        <button onClick={() => setTittleColor("BLUE")}>azul</button>
      </div>
    </div>
  )
}

export default Home