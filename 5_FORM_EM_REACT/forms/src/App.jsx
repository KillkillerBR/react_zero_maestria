import MyForm from "./components/myForm"
import './App.css'

function App() {

  return (
    <div>
      <h2>Forms</h2>
      <MyForm user={{name:"josias", email:"josias@gmail.com", bio:'sou um advogado', role:'admin'}}/>
    </div>
  )
}

export default App
