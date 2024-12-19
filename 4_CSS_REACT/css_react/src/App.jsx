import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/title'

function App() {
  const n = 5

  const redTitle = true

    return (
    <div>
      {/* css global */}
      <h1>React com CSS</h1>
      {/* css de componente */}
      <MyComponent />
      <p>este paragrafo é do app.jsx</p>
      {/* inline style */}
      <p style={{color: "blue", padding: "25px", borderTop: "2px solid red"}} >este elemento foi estilizado inline</p>
      {/* inline dinamico */}
      <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}>css dinamico</h2>
      {/* classe dinamica */}
      <h2 className={redTitle ? "red-title" : "title"}>
        este titulo vai ter classe dinamica
        </h2>
        {/* css modules */}
        <Title />
    </div>
  )
}

export default App
