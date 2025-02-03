import "./product.css"

import { Link, useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Product = () => {
    // 4 - rota dinamica
    const  { id } = useParams()

const url = `http://localhost:3000/products/${id}`

    // 5 - carregamento de dados dinamico
    const {data:item, loading, error} = useFetch(url)

  return (
    <>
    {error && <p>Ocorreu um erro: {error}</p>}
    {loading && <p>Carregando...</p>}
    {item && (
        <div>
            <p>ID do produto: {item.id}</p>
            <h1>{item.name}</h1>
            <p>R$: {item.price}</p>
            {/* 6 - nested routes */}
            <Link to={`/product/${item.id}/info`}>mais informações</Link>
        </div>
    )}
    </>
  )
}

export default Product